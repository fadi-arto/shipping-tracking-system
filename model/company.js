const mongoose = require('mongoose');
const {isPassword} = require('validator');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

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
        //validate : [isPassword , 'pleas enter a valid password']
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