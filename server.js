const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const { createUser, loginAuth } = require('./Controllers/userController')
const { addProduct, updateProduct } = require('./Controllers/productController')
const addAuthor = require('./Controllers/authorController')
const addCategory = require('./Controllers/categoryController')
const validateToken = require('./middleware/authMiddleware')
const addAddress = require('./Controllers/addressController')
const { placeOrder, cancellOrder } = require('./Controllers/orderController')
const app = express();


dotenv.config();
app.use(cors());
connectDB();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/user', createUser);
app.get('/user/login', loginAuth)
app.post('/add-product', addProduct)
app.put('/product/:id', updateProduct)
app.post('/add-author', addAuthor)
app.post('/category', addCategory)
app.post('/myaddress', validateToken, addAddress)
app.post('/orders', validateToken, placeOrder)
app.delete('/orders/:id', validateToken, cancellOrder)



const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Application started on port ${port}`)
})