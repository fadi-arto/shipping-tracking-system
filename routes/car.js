const express = require('express');
const creatcar = require('../controller/car');
const deletcar = require('../controller/car')
var router  =express.Router();


//router.post('/' ,creatcar );
router.delete('/nazer/:id' , deletcar);




module.exports = router;