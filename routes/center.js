const express = require('express');
const { creatcenter  , deletcenter}= require('../controller/center');

var router  = express.Router();


router.post('/' ,creatcenter );
router.delete('/deletcenter/:id' ,deletcenter );



module.exports = router;