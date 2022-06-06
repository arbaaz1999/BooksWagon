const mongoose = require('mongoose')

const authorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author_image: {
        type: String,
    }
})

const AuthorModel = mongoose.model("Author", authorSchema);

module.exports = AuthorModel;