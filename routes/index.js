var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'shipping-jp' });
});


router.post('/login', passport.authenticate('local-signin', {
  successRedirect: '/',
 failureRedirect: '/logins',
  failureFlash: true,
}))



module.exports = router;
