const express = require ('express');
const { createstore , deletestory } = require('../controller/store');
const {creatcar ,updatecar_plate,update_state_car,find_car_by_plate} = require('../controller/car');
const {find_location_carBy_id} = require('../controller/store');
const {show_complaint_byname ,getallcomplaint, show_all_client ,Updateclient} = require('../controller/client');
const {creatcenter} = require('../controller/center')



var router = express.Router();


router.post('/addstory',createstore);
router.delete('/deletstory/:id',deletestory);
router.post('/addcar' , creatcar);
router.get('/findcar/:id' , find_location_carBy_id);
router.put('/updatecarplat/:id' , updatecar_plate );
router.put('/updatestate/:id' , update_state_car );
router.get('/findcar_plate' , find_car_by_plate);
router.get('/show_complaint' ,show_complaint_byname);
router.get('/show_all_complaint',getallcomplaint );
router.post('/createcenter',creatcenter);
router.get('/showall_client' , show_all_client);
router.put('/update_claient/:id' , Updateclient );







module.exports = router;
