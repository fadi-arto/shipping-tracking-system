const express = require("express");
const { newclient, deleteclient, Updateclient ,AddShipment } = require("../controller/client");
const {getShipment } =require("../controller/Shipment")
var router = express.Router();


router.post("/Add_Client", newclient);
router.delete("/Delete_Client/:id", deleteclient);
router.put("/Update_Client/:id", Updateclient);
router.post("/Add_Shipment", AddShipment);

router.get('/getShipment', getShipment)



module.exports = router;
