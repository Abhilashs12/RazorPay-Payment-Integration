const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// TODO: replace with your real Razorpay keys
const razorpay = new Razorpay({
    key_id: "YOUR_KEY_ID",
    key_secret: "YOUR_KEY_SECRET"
});

app.post("/create-order", async (req, res) => {
    const { amount } = req.body; // amount in rupees

    const options = {
        amount: amount * 100, // convert to paise
        currency: "INR",
        receipt: "order_rcptid_" + Date.now()
    };

    try {
        const order = await razorpay.orders.create(options);
        return res.json(order);
    } catch (error) {
        console.error("Error creating Razorpay order:", error);
        return res.status(500).json({ error: "Something went wrong" });
    }
});

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});
