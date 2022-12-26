const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CareSchema = mongoose.Schema({
Car_plate :{
   type : String,
   required : true
},
Location : {
   type : String ,
},
Quantity : {
   type : Number ,
   required : true 

},
Type :{
  type : String ,
  required : true 

},
Email:{
   type : String ,
   required : true 
 
 },
Status : {
    type : String , 
}
},{timestamps : true});


const cars = mongoose.model('cars', CareSchema);
module.exports = cars ;