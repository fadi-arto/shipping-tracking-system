const {model}  = require('mongoose') ; 
const Shipment = require('../../Entity/Shipment');
const clients = require('../../Entity/clients');

//add data to mongoose

const  AddShipments = async (data , result) =>{
    Shipment.create(data,(err , results)=>{
    if(err){
   console.log(err)
   result(err, null)
    }
    else{
        result(null,results)
    
    }

 })
}

module.exports = {AddShipments} ;