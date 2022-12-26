const {model}  = require('mongoose') ; 
const Shipment = require('../../Entity/Shipment');
const clients = require('../../Entity/clients');
const QRCode = require('qrcode');
const crypto = require("crypto")

//add data to mongoose

const  AddShipments = async (data , result) =>{
    // console.log(data)
        
    Shipment.create({SourceLocation:data.SourceLocation ,DistinationLocation:data.DistinationLocation, Services:data.Services , Type_Of:data.Type_Of , EmailSource:data.EmailSource , EmailDistination:data.EmailDistination  , priority:data.priority  },(err , results)=>{
    if(err){        
   console.log(err)
   result(err, null)
    }
    else{
        console.log(results.id)
    //        let QR = {
    //     "id" : results.id , 
    //     }  
    // let stjson = JSON.stringify(QR);
    // QRCode.toDataURL(stjson,function(err,code){ 
    //     console.log(code)
    //     results.Qr =  code ;
    //     console.log(results.Qr)
    //  })
    //  results.save()
     console.log("results")
        result(null,results)
    
    }

 })
}

module.exports = {AddShipments} ;