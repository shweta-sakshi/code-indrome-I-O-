const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const catchAsyncErrors = require("../Middleware/catchAsyncErrors");
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
const paymentDetails = require("../Models/PaymentSucceed");
const Order = require('../Models/orderSchema');
const Cart = require("../Models/cart");
const { authenticate } = require("../Middleware/authentication");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/payment", authenticate,
    catchAsyncErrors(async (req, res, next) => {
        const { items, customer } = req.body;

        // Create a new Stripe Checkout session.
        try {
            const userId = String(req.userId);
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: items.map(item => ({
                    price_data: {
                        currency: 'inr',
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
                client_reference_id: userId,
            });

            res.status(200).json({ id: session.id });
        } catch (error) {
            console.error("Error creating Stripe session:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    })
)

router.get('/order-summary/:paymentId', async (req, res) => {
    try {
        const { paymentId } = req.params;

        // Fetch session details from Stripe
        const session = await stripe.checkout.sessions.retrieve(paymentId);

        if (!session) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json({
            orderId: session.id,
            paymentId: session.payment_intent,
            totalAmount: session.amount_total / 100, // Convert cents to dollars
            currency: session.currency,
            status: session.payment_status,
            customerEmail: session.customer_details.email,
            userId: session.client_reference_id, // Retrieve user ID from client reference
            createdAt: new Date(session.created * 1000) // Convert timestamp
        });
        console.log(res);

    } catch (error) {
        console.error('Error fetching order summary:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/webhooks', bodyParser.raw({ type: 'application/json' }), async (request, response) => {

    console.log('inside webhook.');

    const body = request.body;
    const sig = request.headers['stripe-signature'];

    let event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            sig,
            endpointSecret
        );

    } catch (err) {
        response.status(400).send(`Webhook Error: ${err.message}`);
        console.log("Webhook Error: ", err);
        return;
    }

    // Handle the event
    switch (event.type) {
        case 'checkout.session.async_payment_failed':
            const checkoutSessionAsyncPaymentFailed = event.data.object;
            break;
        case 'checkout.session.completed':
            const checkoutSessionCompleted = event.data.object;
            handleCheckoutSession(checkoutSessionCompleted);
            // Then define and call a function to handle the event checkout.session.completed
            break;
        // ... handle other event types
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
});

// This function is called when a checkout session is completed.
const handleCheckoutSession = async (session) => {
    const userId = session.client_reference_id;

    const CartItems = await CartModule.findOne({ user: userId });

    // Save payment details in database.
    CartItems.items.map(async (item) => {
        const newpayment = new paymentDetails({
            user: userId,
            paymentId: session.id,
            item: {
                productId: item.productId,
                pname: item.pname,
                photo: item.photo,
                number: item.number,
                price: item.price,
            },
            paymentStatus: "success",
            ShippingAddress: session.shipping_details.address ?
                session.shipping_details.address.city + " " + session.shipping_details.address.line1 + " " + session.shipping_details.address.line2 + " " + session.shipping_details.address.postal_code + " " + session.shipping_details.address.state + " " + session.shipping_details.address.country :
                "null",
        });
        await newpayment.save();
    });

    // Clear items from cart after purchase.
    CartItems.items = [];
    CartItems.subTotal = 0;
    await CartItems.save();

};

module.exports = router;