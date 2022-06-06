const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../Models/userModel')


const createUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const isUserExist = await User.findOne({ email })

    if (isUserExist) {
        throw new Error("User Already Exist")
    }

    const user = await User.create({ name, email, password });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
        })
    } else {
        res.status(400)
        res.send("Error Occured!")
    }

})

const loginAuth = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        })
    } else {
        res.status(400)
        res.send("Invalid User!")
    }
})

module.exports = { createUser, loginAuth };