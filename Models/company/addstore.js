const async = require('hbs/lib/async');
const {model}  = require('mongoose') ; 
const store = require('../../Entity/store');



const  addstore = async (data , result) =>{
    store.create(data,(err , results)=>{
    if(err){
   console.log(err)
   result(err, null)
    }
    else{
        result(null,results)
    }

 })
}

module.exports = { addstore } ;