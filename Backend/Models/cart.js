const mongoose = require(mongoose)

const cartSchema = new mongoose.Schema({
    productId:{
        type: Object,
        ref: "Products"
    }
})