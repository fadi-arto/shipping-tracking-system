const express = require("express");
const { newclient, deleteclient, Updateclient ,AddShipment } = require("../controller/client");
const {getShipment,Updateshipment_state,deletesshipment_by_id,Updateshipment_priority,get_location_by_carplate_for_shipment ,get_id_from_QR} =require("../controller/Shipment")
var router = express.Router();


router.post("/Add_Client", newclient);
router.delete("/Delete_Client/:id", deleteclient);
router.put("/Update_Client/:id", Updateclient);
router.post("/Add_Shipment", AddShipment);

router.get('/getShipment', getShipment)
router.put("/Update_state_shipmint/:id", Updateshipment_state);
router.delete("/Delete_shipmint/:id",deletesshipment_by_id );
router.put("/Update_priority_shipmint/:id", Updateshipment_priority);
router.get('/getlocation_byid/:id', get_location_by_carplate_for_shipment)



module.exports = router;
