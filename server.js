const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const razorpay = new Razorpay({
    key_id: "YOUR_KEY_ID",
    key_secret: "YOUR_KEY_SECRET",
});

app.post("/create-order", async (req, res) => {
    const options = {
        amount: req.body.amount * 100,
        currency: "INR",
        receipt: "order_rcptid_11"
    };

    try {
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});
