const mongoose = require('mongoose');;
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const {isEmail} = require('validator');

const CompanySchema = new mongoose.Schema({
    name : {
        type : String , 
        required : true ,

    },
    email : {
    type : String , 
    unique : true ,
    required : true,
    validate : [isEmail,'pleas enter the true email'],

    },
    
    password : {
        type : String ,
        required : true ,
        minlenghth : [6 , 'minumum password is 6 characters'],
    } ,
    center : {
    type : Array ,
    },
    Car : {
        type : Array ,
    }

    
},{ timestamps : true});



CompanySchema.methods.hashPassword = function(Password){
    return bcrypt.hashSync(Password,bcrypt.genSaltSync(),null);
} 





const company = mongoose.model('company' , CompanySchema);
module.exports = company ;