const express = require('express');
const {newclint , deletclint , Updateclint} = require('../controller/clint');

var router  = express.Router(); 

router.post('/' , newclint);
router.delete('/deletcl/:id',deletclint);
router.put('/deletcl/:id', Updateclint);

module.exports = router;