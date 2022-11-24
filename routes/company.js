const express = require ('express');
const { createstore } = require('../controller/store');
const {creatcar ,updatecar_plate,update_state_car} = require('../controller/car');
const {find_location_carBy_id} = require('../controller/store');



var router = express.Router();


router.post('/addstory',createstore);
router.post('/addcar' , creatcar);
router.get('/findcar/:id' , find_location_carBy_id);
router.put('/updatecarplat/:id' , updatecar_plate )
router.put('/updatestate/:id' , update_state_car )







module.exports = router;
