const mongoose = require('mongoose')

const cart_schema = mongoose.Schema(
    {
        product_id: {
            type: String,
            required: true
        },
        product_name: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true,
        },
        selling_price: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const Cart = mongoose.model("Cart", cart_schema)

module.exports = Cart;
