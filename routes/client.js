const express = require("express");
const { newclient, deleteclient, Updateclient ,AddShipment } = require("../controller/client");
const {getShipment } =require("../controller/Shipment")
var router = express.Router();


router.post("/Add_Client", newclient);
router.delete("/Delete_Client/:id", deleteclient);
router.put("/Update_Client/:id", Updateclient);
router.post("/Add_Shipment", AddShipment);


router.get('/',Client_isAuthenticated ,(req,res,next)=>{
  console.log("auth")
} )

router.get('/getShipment', getShipment)


function Client_isAuthenticated(req,res,next){
  if(!req.isAuthenticated())
    console.log("NOT_Authenticated");
    else{
      console.log(req.session);
    console.log("Authenticated");
    next()
    }
}
module.exports = router;
