var express = require('express');
var router = express.Router();
const passport = require('passport');
const {sign_Company} = require('../auth/auth')

/* GET home page. */
router.get('/auth', function(req, res, next) {
 req.session.customer = "client"
  res.send("Signed in client");
});

router.get('/Failure', function(req, res, next) {
  res.send("Error Signed in")
});

router.get('/',function(req, res, next) {
  req.session.customer = "company"
  res.send("admin")
});


router.get('/a',sign_Company,function(req, res, next) {
res.send("a")
});


router.post('/login', passport.authenticate('local-signin', {
  successRedirect: '/auth',
  failureRedirect: '/Failure',
  failureFlash: true,
}))
router.post('/com', passport.authenticate('local-signins', {
  successRedirect: '/',
  failureRedirect: '/Failure',
  failureFlash: true,
}))


module.exports = router;
