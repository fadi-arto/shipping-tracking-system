const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CareSchema = mongoose.Schema({
Car_plate :{
   type : String,
   required : true
},
Location : {
   type : String ,
   required : true
},
Quantity : {
   type : Number ,
   required : true 

},
Type :{
  type : String ,
  required : true 

},
Status : {
    type : String , 
    required : true 
}


},{timestamps : true});


const cars = mongoose.model('cars', CareSchema);
module.exports = cars ;