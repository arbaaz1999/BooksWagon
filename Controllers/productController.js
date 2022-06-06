const asyncHandler = require('express-async-handler')
const ProductModel = require('../Models/productModel')

const addProduct = asyncHandler(async (req, res) => {
    let { name, binding, releasedDate, author, publisher, publisherImprint, category, price, discount, sellingPrice, quantity, imagePath, productDescription, isbn13, isbn10, height, width, weight, noOfPages } = req.body;

    console.log(req.body);
    releasedDate = new Date(releasedDate)
    let product = await ProductModel.create({
        name, binding, releasedDate, author, publisher, publisherImprint, category, price, discount, sellingPrice, quantity, imagePath, productDescription, isbn13, isbn10, height, width, weight, noOfPages
    })

    if (product) {
        res.status(200).json(product)
    } else {
        res.status(400)
        res.send("There is something wrong")
    }
})

const updateProduct = asyncHandler(async (req, res) => {
    let { name, binding, releasedDate, author, publisher, publisherImprint, category, price, discount, sellingPrice, quantity, imagePath, productDescription, isbn13, isbn10, height, width, weight, noOfPages } = req.body;
    console.log(req.params.id)
    let updatedProduct = await ProductModel.updateOne(
        { _id: req.params.id },
        {
            $set: {
                name: name,
                binding: binding,
                releasedDate: releasedDate,
                author: author,
                publisher: publisher,
                publisherImprint: publisherImprint,
                category: category,
                price: price,
                discount: discount,
                sellingPrice: sellingPrice,
                quantity: quantity,
                imagePath: imagePath,
                productDescription: productDescription,
                isbn13: isbn13,
                isbn10: isbn10,
                height: height,
                width: width,
                weight: weight,
                noOfPages: noOfPages
            }
        })
    res.send(updatedProduct)
    // let product;
    // try {
    //     product = await ProductModel.find({ _id: req.params.id })
    //     console.log(product)
    // } catch (error) {
    //     console.log(error)
    // }
    // console.log("2")
    // if (product) {
    //     product.name = name
    //     product.binding = binding
    //     product.releasedDate = releasedDate
    //     product.author = author
    //     product.publisher = publisher
    //     product.publisherImprint = publisherImprint
    //     product.category = category
    //     product.price = price
    //     product.discount = discount
    //     product.sellingPrice = sellingPrice
    //     product.quantity = quantity
    //     product.imagePath = imagePath
    //     product.productDescription = productDescription
    //     product.isbn13 = isbn13
    //     product.isbn10 = isbn10
    //     product.height = height
    //     product.width = width
    //     product.weight = weight
    //     product.noOfPages = noOfPages
    //     console.log("3")
    //     try {
    //         let updatedProduct = await product.update({
    //             name, binding, releasedDate, author, publisher, publisherImprint, category, price, discount, sellingPrice, quantity, imagePath, productDescription, isbn13, isbn10, height, width, weight, noOfPages
    //         });
    //         res.json(updatedProduct);
    //     } catch (e) {
    //         console.log(e)
    //     }
    // } else {
    //     res.status(400)
    //     res.send("Something Went Wrong!")
    // }

})

module.exports = { addProduct, updateProduct };
