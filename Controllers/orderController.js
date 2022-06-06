const Order = require('../Models/orderModel')

const placeOrder = async (req, res) => {
    let { product_name, product_id, address, quantity, selling_price, shipping_charges, amount_payable } = req.body;
    let order;
    try {
        order = await Order.create({ product_name, product_id, address, quantity, selling_price, shipping_charges, amount_payable })
    } catch (error) {
        res.send(error)
    }
    if (order) {
        res.status(200).json(order)
    } else {
        res.status(400).send("Something Went Wrong")
    }
}

const cancellOrder = async (req, res) => {
    try {
        const order = await Order.deleteOne({ id: req.params.id })
        console.log(order)
        if (order.deletedCount !== 0) {
            res.status(200).send("Order Cancelled Successfully")
        } else {
            res.status(404).send("Order Already Cancelled")
        }
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = { placeOrder, cancellOrder };