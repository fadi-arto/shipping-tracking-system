const clients = require("../Entity/clients");
const Shipment = require("../Entity/Shipment");
const {UpdateshipmentById} =require('../Models/Client/updateshipment')
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
 



module.exports = { getShipment , Updateshipment_state , deletesshipment_by_id};
