const express = require('express');
const { creatcenter  , deletcenter , Updatecenter}= require('../controller/center');

var router  = express.Router();


router.post('/' ,creatcenter );
router.delete('/deletcenter/:id' ,deletcenter );
router.put('/deletcenter/:id' , Updatecenter) ;



module.exports = router;