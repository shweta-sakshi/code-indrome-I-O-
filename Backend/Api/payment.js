const express = require("express");
const router = express.Router();
const catchAsyncErrors = require("../Middleware/catchAsyncErrors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// const uuid = require("uuid/v4");
// //to create unique ids so that we are not charging again and again from same user.
// const idempotancykey = uuid()

//pay for product
router.post(
    "/payment",
    catchAsyncErrors(async (req, res, next) => {
        const myPayment = await stripe.paymentIntents.create({
            amount: req.body.price,
            currency: "rupee",
            metadata: {
                company: "chemicalHub",
            },
        });
        res.status(200).json({
            success: true,
            client_secret: myPayment.client_secret,
        });
    })
);

router.get(
    "/stripeapikey",
    catchAsyncErrors(async (req, res, next) => {
        res.status(200).json({ stripeApikey: process.env.STRIPE_API_KEY });
    })
);


module.exports = router;