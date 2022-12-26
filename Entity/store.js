const mongoose = require('mongoose')
const Schema = mongoose.Schema();



const Storeschema =  mongoose.Schema({

shipment : {
      type : Array ,      
},
capicity :{
      type : String,

},
Location : {
    type : String
}


})

const stores = mongoose.model('store' ,Storeschema );
module.exports = stores;