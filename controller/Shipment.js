const clients = require("../Entity/clients");
const Shipment = require("../Entity/Shipment");
const cars = require('../Entity/cars');
const {UpdateshipmentById , Updateshipment_priority_ById,Updateshipment_cost_ById,Updateshipment_service_ById} =require('../Models/Client/updateshipment')
const {deleteshipment} = require('../Models/Client/deleteshipment');

const getShipment = (req, res) => {
  try {
    let id = req.session.passport.user;
    console.log(id);
    clients.findById(id, function (err, results) {
      Shipment.find({ EmailSource: results.email }).then((result) => {
        if (!result) {
          res.send("Don`t have shipment")
        } else {
                          
          res.send(result);
        }
      });
    });
  } catch (error) {
    res.status(203).send("error");
  }
};



const Updateshipment_state = (req, res) => {
  const data  = req.body;
  const id    = req.params.id;
  UpdateshipmentById(data ,id, (err, results) => {
      if (err){
          res.send(err);
      }else{
          res.send(results);
      }
  });

}


const Update_shipment_cost = (req, res) => {
  const data  = req.body;
  const id    = req.params.id;
  Updateshipment_cost_ById(data ,id, (err, results) => {
      if (err){
          res.send(err);
      }else{
          res.send(results);
      }
  });

}







const Update_shipment_service = (req, res) => {
  const data  = req.body;
  const id    = req.params.id;
  Updateshipment_service_ById(data ,id, (err, results) => {
      if (err){
          res.send(err);
      }else{
          res.send(results);
      }
  });

}
















const deletesshipment_by_id = (req,res)=>{
  const id = req.params.id;
  deleteshipment(id, (err,result)=>{
 if(err){
     res.send(err);
 }
 else{
     res.send(result);
 }
 
 })    
 
 }


 const Updateshipment_priority= (req, res) => {
  const data  = req.body;
  const id    = req.params.id;
  Updateshipment_priority_ById(data ,id, (err, results) => {
      if (err){
          res.send(err);
      }else{
          res.send(results);
      }
  });

}


  

const get_location_by_carplate_for_shipment = (req,res)=>{
 let id = req.params.id;
 Shipment.findById(id , (err,results_shipment)=>{
 if (err){
console.log(err);
 }
 else{
cars.findOne({Car_plate:results_shipment.Car_plate},(err,result_car)=>{
if(result_car){
   results_shipment.Location=result_car.Location;  
  results_shipment.save()  
}
else{
console.log(err);

}
})
 }
 })
 res.send("ok");
}





const get_Quantity_by_carplate_for_shipment = (req,res)=>{
  let id = req.params.id;
  Shipment.findById(id , (err,results_shipment)=>{
  if (err){
 console.log(err);
  }
  else{
 cars.findOne({Car_plate:results_shipment.Car_plate},(err,result_car)=>{
 if(result_car){
   console.log(result_car.Quantity) ;
    
 }
 else{
 console.log(err);
 
 }
 res.sendStatus(result_car.Quantity);
 })
  }
  })

  //res.send(result_car.Quantity);
 }










 



module.exports = { getShipment , get_Quantity_by_carplate_for_shipment,Updateshipment_state , deletesshipment_by_id,Updateshipment_priority,get_location_by_carplate_for_shipment,Update_shipment_cost,Update_shipment_service};
