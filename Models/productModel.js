const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        binding: {
            type: String,
        },
        releasedDate: {
            type: Date,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        publisher: {
            type: String,
            required: true
        },
        publisherImprint: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        discount: {
            type: Number
        },
        sellingPrice: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        imagePath: {
            type: String,
            required: true
        },
        productDescription: {
            type: String,
            required: true
        },
        isbn13: {
            type: Number,
            required: true,
            unique: true
        },
        isbn10: {
            type: Number,
            required: true,
            unique: true
        },
        height: {
            type: Number
        },
        width: {
            type: Number
        },
        weight: {
            type: Number
        },
        noOfPages: {
            type: Number,
            required: true
        },

    },
    {
        timestamps: true
    }
)

const Products = mongoose.model("Products", productSchema);

module.exports = Products;