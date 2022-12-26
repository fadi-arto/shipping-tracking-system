const express = require('express');
const { creatcar ,deletecar,Updatecaree }= require('../controller/car');

var router  = express.Router();


router.post('/' ,creatcar );
router.delete('/deletcar/:id' , deletecar);
router.put('/updatecar/:id', Updatecaree);



module.exports = router;