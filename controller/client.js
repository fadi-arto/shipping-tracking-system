const { addclient } = require('../Models/Client/addclient');
const { deletclientbyid } = require('../Models/Client/deleteclient')
const { UpdateclientById } = require('../Models/Client/updateclient'); 
const { AddShipments } = require('../Models/Client/AddShipments'); 
const clients = require("../Entity/clients");
const Shipment = require('../Entity/Shipment');



const newclient = (req, res) => {
    const data = req.body;
    addclient(data,(err, result) => {
        if(err) {
            console.log(err)
            res.send(err)
        }
        else{
            res.send(result) 
        }
    })
}


const deleteclient = (req,res)=>{
 const id = req.params.id;
 deletclientbyid(id, (err,result)=>{
if(err){
    res.send(err);
}
else{
    res.send(result);
}

})    

}




const Updateclient = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    UpdateclientById(data ,id, (err, results,error) => {
        if (err){
            res.send(error);
        }else{
            res.send(results);
        }
    });

}



const AddShipment = (req, res) => {
    const data = req.body;
    AddShipments(data,(err, result) => {
        if(err) {
            console.log(err)
            res.send(err)
        }
        else{
            res.send(result) 
        }
    })
}





module.exports = {newclient , deleteclient ,Updateclient , AddShipment };