const express = require('express');
const { creatcar ,deletecar,Updatecaree,findAll , findAlllocation}= require('../controller/car');

var router  = express.Router();


router.post('/create' ,creatcar );//done
router.delete('/deletcar/:id' , deletecar);//done
router.put('/updatecar/:id', Updatecaree); //-----
router.get('/findall', findAll);//done
router.get('/findalllocation', findAlllocation);//done




module.exports = router;