const {model}  = require('mongoose') ; 
const Shipment = require('../../Entity/Shipment');
const clients = require('../../Entity/clients');
const QRCode = require('qrcode');
const crypto = require("crypto")
const center = require('../../Entity/centers')

//add data to mongoose

const  AddShipments = async (data, center_id , results) =>{
    
                    Shipment.create({center:center_id,SourceLocation:data.SourceLocation,DistinationLocation:data.DistinationLocation,Services:data.Services,Type_Of:data.Type_Of,Weight:data.Weight,EmailDistination:data.EmailDistination,priority:data.priority,state:"WAIT"},(err,result)=>{
                        if(err){
                            console.log(err)
                             results(err, null)
                             }
                         else{
                             results(null,result)
                          }
                                                
    
                    })
                }














module.exports = {AddShipments} ;