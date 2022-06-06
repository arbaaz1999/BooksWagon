const AuthorModel = require('../Models/authorModel')
const asyncHandler = require('express-async-handler');

const addAuthor = asyncHandler(async (req, res) => {
    let { name, description, author_image } = req.body;

    const author = await AuthorModel.create({ name, description, author_image })

    if (author) {
        res.status(200).json(author)
    } else {
        res.status(400)
        res.send("Something went wrong!")
    }
})

module.exports = addAuthor;