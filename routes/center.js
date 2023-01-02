const express = require('express');
const { creatcenter  , deletcenter , Updatecenter , findAllCenters,fin_cnnter_same_company , find_centers_shipment}= require('../controller/center');
const {fin_shipment_same_center} = require('../controller/Shipment');
const {AddShipment} = require('../controller/client');
const passport = require('passport');


var router  = express.Router();


router.post('/create' ,creatcenter );
router.delete('/deletcenter/:id' ,deletcenter );
router.put('/updatecenter/:id' , Updatecenter) ;
router.post('/Add_shipment' ,AddShipment );
router.get('/findAllcenters', findAllCenters);
router.get('/find_shipment_center', fin_shipment_same_center);
router.get('/find_centers', fin_cnnter_same_company);
router.get('/find_centers_shipment', find_centers_shipment);


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