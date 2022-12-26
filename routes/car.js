const express = require('express');
const { creatcar ,deletecar,Updatecaree,findall , findalllocation}= require('../controller/car');

var router  = express.Router();


router.post('/create' ,creatcar );//done
router.delete('/deletcar/:id' , deletecar);//done
router.put('/updatecar/:id', Updatecaree); //-----
router.get('/findall', findall);//done
router.get('/findalllocation', findalllocation);//done




module.exports = router;