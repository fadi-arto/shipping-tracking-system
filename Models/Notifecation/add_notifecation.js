const { model } = require('mongoose');
const Shipment = require('../../Entity/Shipment');
const clients = require('../../Entity/clients');
const QRCode = require('qrcode');
const crypto = require("crypto")
const notfication = require('../../Entity/notfication')

//add data to mongoose

const AddNotification = async (data, results) => {
    let id = req.session.passport.user
    notfication.create({ massage: data.massage, sender: id }, (err, result) => {
        if (err) {
            console.log(err)
            results(err, null)
        }
        else {
            results(null, result)
        }
    })
}














module.exports = { AddNotification };