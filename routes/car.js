const express = require('express');
const { creatcar ,deletecar,Updatecaree }= require('../controller/car');

var router  = express.Router();


router.post('/' ,creatcar );
router.delete('/nazer/:id' , deletecar);
router.put('/nazer/:id', Updatecaree);



module.exports = router;