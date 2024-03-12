const express = require('express')
const cookieParser = require("cookie-parser");
const user = require('./Api/user');
const cors = require("cors");
require("dotenv").config()
require("./Database/conectmongodb.js");

const app = express()
const port = process.env.PORT | 8000

app.use(express.json({ limit: '5mb' }));

//to access folder Storefiles globally
app.use("/", express.static("./utils/StoreFiles"));

app.use(cookieParser());
app.use(cors());
app.use(user);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})