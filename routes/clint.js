const express = require('express');
const {newclint , deletclint , Updateclint} = require('../controller/clint');
const passport = require('passport');

var router  = express.Router(); 

router.post('/' , newclint);
router.delete('/deletcl/:id',deletclint);
router.put('/deletcl/:id', Updateclint);



router.post('/login', passport.authenticate('local-signin', {
    successRedirect: '/',
   failureRedirect: '/logins',
    failureFlash: true,
  }))




module.exports = router;