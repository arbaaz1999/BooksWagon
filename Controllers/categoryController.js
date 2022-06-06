const Category = require('../Models/categoryModel')
const asyncHandler = require('express-async-handler')

const addCategory = asyncHandler(
    async (req, res) => {
        let { category } = req.body;

        let categoryDoc = await Category.create({ category })

        if (categoryDoc) {
            res.status(201).json(categoryDoc)
        } else {
            res.status(400)
            res.send("Something went Wrong!")
        }
    }
)

module.exports = addCategory;