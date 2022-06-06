const Addresses = require('../Models/adressesModel')

const addAddress = async (req, res) => {
    let { recipient_name, company_name, street_adress, landmark, country, state, city, pin_code, mobile, phone, is_default } = req.body;

    let address = await Addresses.create({ recipient_name, company_name, street_adress, landmark, country, state, city, pin_code, mobile, phone, is_default })

    if (address) {
        res.status(200).json(address)
    } else {
        res.status(400).send("Somethind Went Wrong")
    }
}

module.exports = addAddress;
