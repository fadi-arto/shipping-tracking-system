const mongoose = require('mongoose');
const {isEmail, minlenght} = require('validator');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const ShipmentSchema = new mongoose.Schema({
 
    SourceLocation : {
        type : String , 
        required : true  , 

    },
    DistinationLocation : {
        type : String, 
        required : true ,
    },

    Car_plate : {
        type : String ,
    },
    Services  : {
        type:Array ,
        required : true  , 

    },
    Type_Of :{
        type : String ,
        required : true  , 
    },
    Weight:{
        type:Number,
    },
    EmailSource:{
        type:String,
        required : true  , 

    },
    EmailDistination:{
        type:String,
        required : true  , 
    }, 
    DateStart:{
        type:Date,
        default: Date.now
    },
    DateEnd:{
        type:Date,
    },
    LateShipment:{
        type:Number
    },
    ExceptionTime:{
        type:Number
    },
    cost:{
        type:Number
    },

},{ timestamps : true});

const Shipment = mongoose.model('Shipment' , ShipmentSchema);
module.exports = Shipment ;
