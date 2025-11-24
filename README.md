# 💳 RazorPay Payment Integration using Node.js

## 📌 Overview
This project demonstrates a working RazorPay payment flow using Node.js and Express.  
The backend securely creates RazorPay orders, and the frontend launches the RazorPay Checkout popup, allowing users to make payments through UPI, Cards, Wallets, and Net Banking. This is a lightweight, developer-friendly implementation that can be extended into full-scale fintech applications.

---

## 🚀 Features
✅ Create RazorPay orders from backend  
✅ Trigger RazorPay checkout from frontend  
✅ Works with test mode keys  
✅ Supports dynamic payment amounts  
✅ Secure key handling on server side  
✅ Minimal setup — runs locally in minutes  

---

## 🛠 Tech Stack

### Backend
- Node.js  
- Express  
- RazorPay SDK  
- CORS  
- Body-Parser  

### Frontend
- HTML  
- JavaScript  
- RazorPay Checkout.js  

razorpay-payment/
├── README.md
├── server.js
├── package.json
└── public/
└── index.html

---

## 🔧 Setup & Installation

### 1️⃣ Install dependencies
```bash
npm install

Add RazorPay API Keys

Open server.js and replace:

key_id: "YOUR_KEY_ID",
key_secret: "YOUR_KEY_SECRET"
Get keys from: 
https://dashboard.razorpay.com/app/keys

Start the backend server
node server.js


Server runs at:

http://localhost:5000

4️⃣ Open the frontend

Open:

public/index.html


Click Pay Now
---

## 📂 Project Structure
