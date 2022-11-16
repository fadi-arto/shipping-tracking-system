const express = require ('express');
const { createcompany } = require('../controller/company');


var router = express.Router();

router.post('/' ,createcompany);


module.exports = router;
