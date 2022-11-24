const mongoose = require('mongoose')
const Schema = mongoose.Schema();



const Storeschema =  mongoose.Schema({

Store : {
    shipment : Array , 
   // required: true 
}


})

const stores = mongoose.model('store' ,Storeschema );
module.exports = stores;