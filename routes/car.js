const express = require('express');
const creatcar = require('../controller/car');
const deletecar = require('../controller/car')
var router  = express.Router();


router.post('/' ,creatcar );
router.delete('/nazer/:id' , deletecar);




module.exports = router;