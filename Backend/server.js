const express = require('express')
const cookieParser = require("cookie-parser");
const user = require('./Api/user');
const Shop = require('./Api/Shop.js');
const order = require('./Api/order.js');
const payment = require('./Api/payment.js');
const product = require('./Api/product.js');
const withdraw = require('./Api/withdraw.js');
const cors = require("cors");
require("dotenv").config()
require("./Database/conectmongodb.js");

const app = express()
const port = process.env.PORT | 8000

app.use(express.json());

//to access folder Storefiles globally
// app.use("/", express.static("./utils/StoreFiles"));

app.use(cookieParser());
app.use(cors());
app.use("/api", user);
app.use("/api", Shop);
app.use("/api", order);
app.use("/api", payment);
app.use("/api", product);
app.use("/api", withdraw);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})