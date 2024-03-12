const express = require('express');
const path = require("path");
const router = new express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const sendMail = require("../utils/sendMail.js");
const sendSellerToken = require("../utils/sendSellerToken.js");
const Shop = require("../Models/shopSchema.js");
const { authenticateSeller } = require("../Middleware/authentication.js");
const { upload } = require("../Middleware/multer.js");
const CatchAsyncErrors = require("../Middleware/catchAsyncErrors.js");
const ErrorHandler = require("../Middleware/error.js");
const fs = require("fs");

//for Seller registration
router.post("/seller-SignUp", upload.single("file"), async (req, res) => {

    const { sname, email, phoneNumber, password, cpassword, address, zipCode } = req.body

    try {
        const sellerEmail = await Shop.findOne({ email, phoneNumber });

        if (sellerEmail) {
            //if seller already exist then unlink the image.
            const filename = req.file.filename;
            const filepath = `StoreFiles/${filename}`
            fs.unlink(filepath, (err) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ message: "Error while deleting file" });
                } else {
                    res.json({ message: "File deleted successfully" });
                }
            })
            //console.log("user already exist");
            res.status(422).json({ error: "This Email/phone already Exist" });
        } else if (password != cpassword) {

            //if password doesn't match then unlink the image.
            const filename = req.file.filename;
            const filepath = `StoreFiles/${filename}`
            fs.unlink(filepath, (err) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ message: "Error while deleting file" });
                }
            })

            res.status(422).json({ error: "Confirm password doesn't match" });
        } else {
            const filename = req.file.filename;
            const fileurl = path.join(filename);

            const Avatar = fileurl;

            const finalSeller = { sname, email, phoneNumber, password, cpassword, address, zipCode, Avatar };

            //To verify Email account before creating user account
            const ActivationToken = createActivationToken(finalSeller);
            const activationUrl = `http://localhost:3000/seller/activation/${ActivationToken}`

            try {
                await sendMail({
                    email: finalSeller.email,
                    subject: "Activate your Chemical Hub Shop",
                    message: `Hello ${finalSeller.sname}, Welcome to Chemical Hub, Please click on the link within 5 minutes to activate your Shop: ${activationUrl}`
                })
                res.status(201).json({
                    success: true,
                    message: "Please check your mail to activate Shop"
                })
            } catch (error) {
                return next(new ErrorHandler(error.message, 500))
            }

        }

    } catch (error) {

    }
});

//create Shop Activation Token
const createActivationToken = (finalSeller) => {
    return JsonWebTokenError.sign(finalSeller, process.env.ACTIVATION_SECRETKEY, {
        expiresIn: "5m",
    })
}

//Activate Seller
router.post("seller/activation", CatchAsyncErrors(async (req, res, next) => {
    try {
        const { activation_token } = req.body
        const newSeller = jwt.verify(activation_token, process.env.ACTIVATION_SECRETKEY)
        if (!newSeller) {
            return next(new ErrorHandler("Invatid Token"))
        }

        const { sname, email, phoneNumber, password, cpassword, address, zipCode, Avatar } = newSeller

        const seller = Shop.findOne({ email, phone });
        if (seller) {
            return next(new ErrorHandler("Seller already exists", 400));
        }

        seller = await Shop.create({
            sname, email, phoneNumber, password, cpassword, address, zipCode, Avatar
        });

        try {
            await sendMail({
                email: email,
                subject: "Shop Activated",
                message: `${sname} Shop has been created successfully, Thanyou for choosing Chemical Hub`
            })
            res.status(201).json({
                success: true,
                message: "Shhop created you can login now"
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 500))
        }

        sendSellerToken(seller, 201, res);

    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}))

//for seller Login
router.post("/seller-SignIn", async (req, res) => {

    const { email, password } = req.body

    if (!email || !password) {
        res.stataus(422).json({ error: "fill all the details" });
    }

    try {
        //changed
        const sellerValid = await Shop.findOne({ email });

        if (sellerValid) {

            const isMatch = await bcrypt.compare(password, sellerValid.password)

            if (!isMatch) {
                res.status(422).json({ error: "Incorrect details" });
            } else {
                //we will be using JWT(token) for authentication through headers

                //Token generate
                const token = await sellerValid.generateAuthtoken();

                //we will use this token to generate cookie and use it in frontend

                //cookie generate
                res.cookie("Sellercookie", token, {
                    expires: new Date(Date.now() + 9000000),
                    httpOnly: true
                });

                const result = {
                    sellerValid,
                    token
                }
                res.status(201).json({ status: 201, result });
            }
        }
    } catch (err) {
        res.status(401).json(err);
        console.log(err);
    }
})

//seller valid
router.get("/validseller", authenticateSeller, async (req, res) => {
    try {
        const ValidSellerOne = await Shop.findOne({ _id: req.sellerId });
        res.status(201).json({ status: 201, ValidSellerOne });
    } catch (err) {
        //console.log("err");
        res.status(401).json({ status: 401, err });
    }
});

//seller signout
//if seller doesn't have token then we can't logout them
router.get("/sellerSignOut", authenticate, async (req, res) => {
    try {

        //clear token
        req.rootSeller.tokens = req.rootSeller.tokens.filter((curelem) => {
            return curelem.token !== req.token
        });

        //clear cookie
        const cookies = Object.keys(req.cookies);
        cookies.forEach(cookie => {
            res.clearCookie(cookie, { path: "/" });
        });

        try {
            await req.rootSeller.save();
        } catch (error) {
            console.log("error while logout");
        }

        res.status(201).json({ status: 201, message: "Logout Complete" });

    } catch (error) {
        res.status(401).json({ status: 401, error });
    }
});

module.exports = router;

/* 

seller signup-->get activation token on mail---->click on activation link in mail---->
seller shop created---->seller get successful shop creation mail------>seller can login with the same mail-Id and password------>
sellers get verified---->token created in cookies--->seller can logout / can remain loggedin for 1 day----->
seller will be verified with token----->cookies will be deleted.
 
*/