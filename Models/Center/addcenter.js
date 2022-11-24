const async = require('hbs/lib/async');
const {model}  = require('mongoose') ; 
const center = require('../../Entity/centers');

//add data to mongoose

const  addcenter = async (data , result) =>{
    center.create(data,(err , results)=>{
    if(err){
   console.log(err)
   result(err, null)
    }
    else{
        result(null,results)
    }

 })
}

module.exports = { addcenter } ;