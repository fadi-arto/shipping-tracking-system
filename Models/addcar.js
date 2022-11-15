const async = require('hbs/lib/async');
const {model}  = require('mongoose') ; 
const car = require('.././views/model/cars');



const  addcar = async (data , result) =>{
 car.addcar([data],(err , results)=>{
    if(err){
   console.log(err)
   result(err, null)
    }
    else{
        result(null,results)
    }

 })
}

module.exports = {addcar} ;