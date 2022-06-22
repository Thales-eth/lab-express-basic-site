const mongoose = require('mongoose')

const phoneSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [String]
})

const Product = mongoose.model('product', phoneSchema)

module.exports = Product