const mongoose = require('mongoose');
const {isEmail} = require('validator');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const ClientSchema = new mongoose.Schema({
    _id : {
        type : String,
        required : true,         
    },
    Name : {
        type : String , 
        required : [true , 'pleas enter the name'] , 

    },
    Email : {
        type : String, 
        
        //validate : [isEmail , 'pleas enter a valid email '],
        required : [true , 'pleas enter the email'],
    },
    Password : {
        type : String ,
        required : [true , 'pleas enter the password'] ,
    },
    services  : {
     
     type : {
        _id : String ,
        name : String , 
        name_of_company : String,
        time : Date 
     },
     required : true ,
           
    }
    
    
},{ timestamps : true});





ClientSchema.methods.hashPassword = function(Password){
    return bcrypt.hashSync(Password,bcrypt.genSaltSync(),null);
}

ClientSchema.methods.comparePassword = function(Passsword){
    return bcrypt.compareSync(Password , this.Passsword)
}




const clients = mongoose.model('clients' , ClientSchema);
module.exports = clients ;
