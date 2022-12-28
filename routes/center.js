const express = require('express');
const { creatcenter  , deletcenter , Updatecenter , findAllCenters}= require('../controller/center');
const {AddShipment} = require('../controller/client');
const passport = require('passport');


var router  = express.Router();


router.post('/create' ,creatcenter );
router.delete('/deletcenter/:id' ,deletcenter );
router.put('/updatecenter/:id' , Updatecenter) ;
router.post('/Add shipment' ,AddShipment );
router.get('/findAllcenters', findAllCenters);

router.get('/auth', function(req, res, next) {
     res.send("Signed in Centers");
   });
   
   router.get('/Failure', function(req, res, next) {
     res.send("Error Signed in")
   });
   router.post('/login_centers', passport.authenticate('local-centers', {
     successRedirect: '/auth',
     failureRedirect: '/mangecenter/Failure',
     failureFlash: true,
   }))


module.exports = router;