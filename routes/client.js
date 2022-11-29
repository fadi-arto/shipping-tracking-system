const express = require("express");
const { newclient, deleteclient, Updateclient ,AddShipment } = require("../controller/client");
const {getShipment,Updateshipment_state,deletesshipment_by_id } =require("../controller/Shipment")
var router = express.Router();


router.post("/Add_Client", newclient);
router.delete("/Delete_Client/:id", deleteclient);
router.put("/Update_Client/:id", Updateclient);
router.post("/Add_Shipment", AddShipment);

router.get('/getShipment', getShipment)
router.put("/Update_state_shipmint/:id", Updateshipment_state);
router.delete("/Delete_shipmint/:id",deletesshipment_by_id );



module.exports = router;
