const mongoose = require('mongoose')

const order_schema = mongoose.Schema(
    {
        product_name: {
            type: String,
            required: true
        },
        product_id: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        selling_price: {
            type: Number,
            required: true
        },
        shipping_charges: {
            type: Number,
            required: true
        },
        amount_payable: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Order = mongoose.model("Order", order_schema);

module.exports = Order;
