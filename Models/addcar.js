const async = require('hbs/lib/async');
const {model}  = require('mongoose') ; 
const car = require('.././views/model/cars');



const  create = async (data , result) =>{
 car.create([data],(err , results)=>{
    if(err){
   console.log(err)
   result(err, null)
    }
    else{
        result(null,results)
    }

 })
}

module.exports = {create} ;