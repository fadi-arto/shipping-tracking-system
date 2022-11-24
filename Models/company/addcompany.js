const async = require('hbs/lib/async');
const {model}  = require('mongoose') ; 
const company = require('../../Entity/company');

//add data to mongoose

const  addcompany = async (data , result) =>{
company.findOne({email: data.email}).then(companys=>{
    if(companys){
        result("email is already in the company",null)
    }
    else{
        company.create({name : data.name , email: data.email , password : new company().hashPassword(data.password) },(err , results)=>{
            if(err){
           console.log(err)
           result(err, null)
            }
            else{
                result(null,results)
            }
        
         })
    }
})


}

module.exports = { addcompany } ;



