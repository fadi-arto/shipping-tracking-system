const async = require('hbs/lib/async');
const {model}  = require('mongoose') ; 
const clients = require('../../model/clients');

//add data to mongoose

const  addclint = async (data , result) =>{
    clients.create(data,(err , results)=>{
    if(err){
   console.log(err)
   result(err, null)
    }
    else{
        result(null,results)
    }

 })
}

module.exports = {addclint} ;