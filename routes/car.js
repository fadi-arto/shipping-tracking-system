const express = require('express');
const creatcar = require('../controller/car');
var router  =express.Router();

router.post('/' ,creatcar );




module.exports = router;