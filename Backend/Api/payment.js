const express = require("express");
const router = express.Router();
const catchAsyncErrors = require("../Middleware/catchAsyncErrors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/payment",
    catchAsyncErrors(async (req, res, next) => {
        const { items, customer } = req.body;

        try {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: items.map(item => ({
                    price_data: {
                        currency: 'inr',  // You can use any currency for testing
                        product_data: {
                            name: item.pname,
                        },
                        unit_amount: item.price * 100,
                    },
                    quantity: item.quantity,
                })),
                billing_address_collection: 'required',
                shipping_address_collection: {
                    allowed_countries: ['IN', 'US', 'CA'],
                },
                mode: 'payment',
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/cancel`,
            });

            res.status(200).json({ id: session.id });
        } catch (error) {
            console.error("Error creating Stripe session:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    })
)

router.get(
    "/stripeapikey",
    catchAsyncErrors(async (req, res, next) => {
        res.status(200).json({ stripeApikey: process.env.STRIPE_API_KEY });
    })
);


module.exports = router;