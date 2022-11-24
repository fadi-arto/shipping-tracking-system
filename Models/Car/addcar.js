const async = require('hbs/lib/async');
const {model}  = require('mongoose') ; 
const car = require('../../Entity/cars');

//add data to mongoose

const  addcar = async (data , result) =>{
    car.create(data,(err , results)=>{
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