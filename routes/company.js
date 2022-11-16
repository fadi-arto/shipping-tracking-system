const express = require ('express');
const { createcompany } = require('../controller/company');
const { deletcompany } =require('../controller/company');
const { Updatecompany } = require('../controller/company');


var router = express.Router();

router.post('/' ,createcompany);
router.delete('/deletcompany/:id' , deletcompany);
router.put('/update/:id' ,Updatecompany );


module.exports = router;
