const express = require('express');
const { creatcenter  , deletcenter , Updatecenter}= require('../controller/center');
const {AddShipment} = require('../controller/client');

var router  = express.Router();


router.post('/' ,creatcenter );
router.delete('/deletcenter/:id' ,deletcenter );
router.put('/updatecenter/:id' , Updatecenter) ;
router.post('/addshipment' ,AddShipment );




module.exports = router;