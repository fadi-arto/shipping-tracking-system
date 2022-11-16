const mongoose = require('mongoose');;
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const {isEmail} = require('validator');
const validator = require('validator');
const { minlenghth }  = require('validator');

const CompanySchema = new mongoose.Schema({
    Name : {
        type : String , 
        required : true ,

    },
    Email : {
    type : String , 
    unique : true ,
    required : true,
    validate : [isEmail,'pleas enter the true email'],

    },
    
    Password : {
        type : String ,
        required : true ,
        minlenghth : [6 , 'minumum password is 6 characters'],
    } ,
    center : {
    type : Array ,
    },
    Car : {
        type : Array ,
        required: true ,
    }

    
},{ timestamps : true});



CompanySchema.methods.hashPassword = function(Password){
    return bcrypt.hashSync(Password,bcrypt.genSaltSync(),null);
} 

CompanySchema.methods.comparePassword = function(Password){
    return bcrypt.compareSync(Password , this.Password)
} 



const company = mongoose.model('company' , CompanySchema);
module.exports = company ;