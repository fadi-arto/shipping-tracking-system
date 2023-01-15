const express = require('express');
const { creatcenter  , deletcenter , Updatecenter , findAllCenters,fin_cnnter_same_company , find_centers_shipment}= require('../controller/center');
const {fin_shipment_same_center,get_shippment_done_and_wait} = require('../controller/Shipment');
const {AddShipment} = require('../controller/client');
const {createplan,find_all_plan_center,find_plan_company,add_shipment_to_plane} =require('../controller/plan')
const {createNotification,get_Notification} = require('../controller/Notification')
const passport = require('passport');


var router  = express.Router();

router.post('/addNotfication' , createNotification);
router.post('/create' ,creatcenter );
router.get('/get_Email_center' ,get_Notification )
router.post('/createplan',createplan );
router.delete('/deletcenter/:id' ,deletcenter );
router.put('/updatecenter/:id' , Updatecenter) ;
router.post('/Add_shipment' ,AddShipment );
router.get('/findAllcenters', findAllCenters);
router.get('/find_shippment_wait_done', get_shippment_done_and_wait);
router.get('/find_shipment_center', fin_shipment_same_center);
router.get('/find_centers', fin_cnnter_same_company);
router.get('/find_centers_shipment', find_centers_shipment);
router.get('/find_plan_company', find_plan_company);
router.get('/find_plan_center', find_all_plan_center);
router.put('/add_shipment_to_plan', add_shipment_to_plane);
router.get('/auth', function(req, res, next) {
    req.session.customer = "Center";
    console.log(req.isAuthenticated());
    console.log(req.session);
    console.log("1");
     res.send("Signed in Employee");
   });
   
   router.get('/Failure', function(req, res, next) {
     res.send("Error Signed in")
   });
  
  router.post('/login', passport.authenticate('local-signin', {
    successRedirect: '/mangecenter/auth',
    failureRedirect: '/mangecenter/Failure',
    failureFlash: true,
  }))
  

module.exports = router;