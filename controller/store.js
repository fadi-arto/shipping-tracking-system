const { model } = require('mongoose');
const { addstore } = require('../Models/company/addstore');
const { deletstorebyid } = require('../Models/company/deletestore');
const cars = require('../Entity/cars');
const store = require('../Entity/store');



const createstore = (req,res) => {
    const data = req.body;
    addstore(data,(err, result) => {
        if(err) {
            console.log(err)
            res.send(err)
        }
        else{
            res.send(result) 
        }
    })
}


const find_location_carBy_id = (req, res) => {
    try {
        let id = req.params.id;
        console.log(id)
        cars.findById(id , function(err , results){
            res.send(results.Location)
        })
    }
    catch(err){
        res.send("errore");

    }
}


const deletestory = (req,res)=>{
    const id = req.params.id;
    deletstorebyid(id, (err,result)=>{
   if(err){
       res.send(err);
   }
   else{
       res.send(result);
   }
   
   })    
   
   }

const find_all_story=(req,res)=>{
    store.find({}, (err , result)=>{
     if(result){
        res.send(result)
     }
     else{
        res.send("dont have store")
     }

    })

}





const find_story_by_id=(req,res)=>{
    const id = req.params.id
    store.findById(id , (err , result)=>{
     if(result){
        res.send(result)
     }
     else{
        res.send("dont have store")
     }

    })

}
   


const find_story_shipment_by_id=(req,res)=>{
    const id = req.params.id
    store.findById(id , (err , result)=>{
     if(result){
        res.send(result.shipment)
     }
     else{
        res.send("dont have shipment")
     }

    })

}

   






module.exports = { createstore , find_location_carBy_id,deletestory, find_all_story,find_story_by_id,find_story_shipment_by_id}