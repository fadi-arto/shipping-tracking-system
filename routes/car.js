const express = require('express');
const { creatcar ,deletecar,Updatecaree,findall , Car_Company,fin_car_same_company}= require('../controller/car');

var router  = express.Router();
const passport = require('passport');


router.post('/create' ,creatcar );//done
router.delete('/deletcar/:id' , deletecar);//done
router.put('/updatecar/:id', Updatecaree); //-----
router.get('/findall', findall);//done
router.get('/Car_Company', Car_Company);//done
router.get('/find_car_same_company', fin_car_same_company);

router.get('/auth', function(req, res, next) {
    req.session.customer = "Vehicle";
        console.log(req.isAuthenticated());
     res.send("Signed in Vehicle");
   });
   
   router.get('/Failure', function(req, res, next) {
     res.send("Error Signed in")
   });
  
  router.post('/login', passport.authenticate('local-managecar', {
    successRedirect: '/managecar/auth',
    failureRedirect: '/managecar/Failure',
    failureFlash: true,
  }))



module.exports = router;