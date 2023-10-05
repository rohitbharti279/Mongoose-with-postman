const mongoose = require("mongoose");

//validation
const product_Schema = new mongoose.Schema({
    //whatever add here that will be add only with same type
    name: String,
    price: Number,
    brand: String,
    category: String,
    company: String
});

module.exports= mongoose.model("products", product_Schema);