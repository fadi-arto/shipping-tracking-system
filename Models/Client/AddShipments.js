const {model}  = require('mongoose') ; 
const Shipment = require('../../Entity/Shipment');
const clients = require('../../Entity/clients');
const QRCode = require('qrcode');
const crypto = require("crypto")
const center = require('../../Entity/centers')

//add data to mongoose

const  AddShipments = async (data, center_id , result) =>{
    Shipment.find({},(err , results)=>{
        if(err){
       console.log(err)
     
        }
        else{
            center.findById(center_id,(err,center_result)=>{
                if(company_result){
                    Shipment.create({center:center_result.id,SourceLocation:data.SourceLocation,DistinationLocation:data.DistinationLocation,Car_plate:data.Car_plate,Services:data.Services,Type_Of:data.Type_Of,Weight:data.Weight,EmailSource:data.EmailSource,EmailDistination:data.EmailDistination,DateEnd:data.DateEnd,LateShipment:data.LateShipment,ExceptionTime:data.ExceptionTime,cost:data.cost,Evaloation:data.Evaloation,priority:data.priority,state:data.state,Location:data.Location},(err,result)=>{
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














module.exports = {AddShipments} ;