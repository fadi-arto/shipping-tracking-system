const async = require('hbs/lib/async');
const {model}  = require('mongoose') ; 
const car = require('../../Entity/cars');
const company = require('../../Entity/company')

//add data to mongoose

const  addcar = async (data ,company_id ,result) =>{
    car.find({},(err , results)=>{
    if(err){
   console.log(err)
 
    }
    else{
        company.findById(company_id,(err,company_result)=>{
            if(company_result){
                car.create({company:company_result.name,Car_plate:data.Car_plate,Location:data.Location,Email:data.Email,Quantity:data.Quantity,Type:data.Type,Status:data.Status},(err,result)=>{
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

 })
}



















module.exports = {addcar} ;