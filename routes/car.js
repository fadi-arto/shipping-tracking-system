const express = require('express');
const creat = require('../controller/car');
var router  =express.Router();

router.post('/' ,creat );




module.exports = router;