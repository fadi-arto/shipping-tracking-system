const express = require('express');
const { creatcenter  , deletcenter , Updatecenter , findAllCenters,fin_cnnter_same_company}= require('../controller/center');
const {fin_shipment_same_center} = require('../controller/Shipment');
const {AddShipment} = require('../controller/client');
const passport = require('passport');


var router  = express.Router();


router.post('/create' ,creatcenter );
router.delete('/deletcenter/:id' ,deletcenter );
router.put('/updatecenter/:id' , Updatecenter) ;
router.post('/Add shipment' ,AddShipment );
router.get('/findAllcenters', findAllCenters);
router.get('/find_shipment_same_center', fin_shipment_same_center);
router.get('/find_center_same_company', fin_cnnter_same_company);

router.get('/auth', function(req, res, next) {
    console.log(req.isAuthenticated());
     res.send("Signed in Centers");
   });
   
   router.get('/Failure', function(req, res, next) {
     res.send("Error Signed in")
   });
   router.post('/login_centers', passport.authenticate('local-centers', {
     successRedirect: '/mangecenter/auth',
     failureRedirect: '/mangecenter/Failure',
     failureFlash: true,
   }))


module.exports = router;