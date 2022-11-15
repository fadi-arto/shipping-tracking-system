const express = require('express');
const { creatcenter }= require('../controller/center');

var router  = express.Router();


router.post('/' ,creatcenter );



module.exports = router;