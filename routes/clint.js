const express = require('express');
const {newclint , deletclint , Updateclint} = require('../controller/clint');
const passport = require('passport');



var router  = express.Router(); 

router.post('/addclint' , newclint);
router.delete('/deletcl/:id',deletclint);
router.put('/update/:id', Updateclint);




router.post('/login', passport.authenticate('local', {  successRedirect: '/login' ,failureRedirect: '/' , failureFlash: true }),

   );
  router.get('/nazer',(req,res,next)=>{
    console.log(req.isAuthenticated());
  })







   





module.exports = router;