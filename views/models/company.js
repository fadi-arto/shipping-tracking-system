const mongoose = require('mongoose');
const {isPassword} = require('validator');

const CompanySchema = new mongoose.Schema({
    _id : {
        type : String,
        required : true,         
    },
    Name : {
        type : String , 
        required : [true , 'pleas enter the name'] , 

    },
    
    Password : {
        type : String ,
        required : [true , 'pleas enter the password'] ,
        validate : [isPassword , 'pleas enter a valid password']
    }
    
},{ timestamps : true});

const company = mongoose.model('clint' , CompanySchema);
module.exports = company ;
