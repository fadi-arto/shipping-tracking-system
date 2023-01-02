const express = require ('express');
const { createstore , deletestory,find_all_story ,find_story_by_id,find_story_shipment_by_id} = require('../controller/store');
const {creatcar ,updatecar_plate,update_state_car,find_car_by_plate} = require('../controller/car');
const {find_location_carBy_id} = require('../controller/store');
const {show_complaint_byname ,getallcomplaint, show_all_client ,Updateclient} = require('../controller/client');
const {creatcenter} = require('../controller/center')
var router = express.Router();
const passport = require('passport');


var router = express.Router();

router.post('/create_center' ,creatcenter);



router.post('/addstory',createstore);
router.delete('/deletstory/:id',deletestory);
router.post('/addcar' , creatcar);
router.get('/findcar/:id' , find_location_carBy_id);
router.get('/find_store_id/:id' , find_story_by_id);
router.get('/find_store_shipment_byid/:id' , find_story_shipment_by_id);
router.get('/findallstore' , find_all_story);
router.put('/updatecarplat/:id' , updatecar_plate );
router.put('/updatestate/:id' , update_state_car );
router.get('/findcar_plate' , find_car_by_plate);
router.get('/show_complaint' ,show_complaint_byname);
router.get('/show_all_complaint',getallcomplaint );
router.get('/showall_client' , show_all_client);
router.put('/update_claient/:id' , Updateclient );



router.get('/auth', function(req, res, next) {
    req.session.customer = "company"
    console.log(req.isAuthenticated());
    console.log(req.session);
    console.log("2");
     res.send("Signed in company");
   });
   
   router.get('/Failure', function(req, res, next) {
     res.send("Error Signed in")
   });
   router.post('/login_company', passport.authenticate('local-signup', {
     successRedirect: '/mangecompany/auth',
     failureRedirect: '/mangecompany/Failure',
     failureFlash: true,
   }))
   
   
   
   



module.exports = router;

/* GET home page. */
