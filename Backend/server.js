const express = require('express')
const cookieParser = require("cookie-parser");
const user = require('./Api/user');
const Shop = require('./Api/Shop.js');
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
app.use(user);
// app.use("/", Shop);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})