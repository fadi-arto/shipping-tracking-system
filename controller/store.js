const { model } = require('mongoose');
const { addstore } = require('../Models/company/addstore');
const { deletstorebyid } = require('../Models/company/deletestore');
const cars = require('../Entity/cars');



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


   






module.exports = { createstore , find_location_carBy_id,deletestory }