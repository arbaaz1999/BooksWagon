const jwt = require('jsonwebtoken')
require('dotenv').config()

const validateToken = async (req, res, next) => {
    console.log("inside token middleware")
    // console.log(req.body)
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(" ")[1]
    }
    // let { token } = req.headers
    // console.log(token)
    if (!token) {
        console.log(token)
        return res.status(401).json({ errorMessage: "Invalid Authentication" })
    }
    let decoded = null
    try {
        decoded = await jwt.verify(token, process.env.JWT_SECRET)
        req.decoded = decoded
    } catch (e) {
        console.log("error in token middleware", e)
        return res.status(404).json({ "message": "Invalid Authentication Token" })
    }
    // console.log("in middleware", req.decoded)
    next()
}

module.exports = validateToken;