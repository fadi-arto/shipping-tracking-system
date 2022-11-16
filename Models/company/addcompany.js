const async = require('hbs/lib/async');
const {model}  = require('mongoose') ; 
const company = require('../../model/company');

//add data to mongoose

const  addcompany = async (data , result) =>{
    company.create(data,(err , results)=>{
    if(err){
   console.log(err)
   result(err, null)
    }
    else{
        result(null,results)
    }

 })
}

module.exports = { addcompany } ;



