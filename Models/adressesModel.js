const mongoose = require('mongoose')

const address_schema = mongoose.Schema(
    {
        recipient_name: {
            type: String,
            required: true
        },
        company_name: {
            type: String,
        },
        street_adress: {
            type: String,
            required: true
        },
        landmark: {
            type: String
        },
        country: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true
        },
        pin_code: {
            type: Number,
            required: true
        },
        mobile: {
            type: Number,
            required: true
        },
        phone: {
            type: Number
        },
        is_default: {
            type: Boolean
        }
    }
)

const Addresses = mongoose.model("Addresses", address_schema);

module.exports = Addresses;