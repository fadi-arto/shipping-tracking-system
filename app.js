var createError = require('http-errors');
var express = require('express');
const mongoose = require('mongoose');
const cars = require( './model/cars');
const clients = require('./model/clients');
const company = require('./model/company');
const centers = require('./model/centers');
const passport = require('passport');
const session  = require('express-session');
const flash = require('connect-flash');
const localStrategy = require('passport-local').Strategy;







var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var carRouter = require('./routes/car');
var ClintRouter = require('./routes/clint');
var CentersRouter = require('./routes/center');
var CompanyRouter = require('./routes/company');



var app = express();

const dbURI = 'mongodb+srv://tarcking:12345@nudetuts.vtv2cor.mongodb.net/note-tuts?retryWrites=true&w=majority' ;  
mongoose.connect(dbURI , {useNewUrlParser : true , useUnifiedTopology : true})
  .then((result)=> app.listen(8002))
  .catch((err)=> console.log(err));



  

require('./config/passport');




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(session({
//   secret : 'shipping-jp',
//   saveUninitialized :  true,
//   /// for creat new session between server and client 
//   resave : true,
//   }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));







app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mangecar',carRouter);
app.use('/mangeclint' , ClintRouter);
app.use('/mangecenter' ,CentersRouter);
app.use('/mangecompany',CompanyRouter);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
