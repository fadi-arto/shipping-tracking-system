var createError = require('http-errors');
var express = require('express');
const mongoose = require('mongoose');
const cars = require( './model/cars');
const clients = require('./model/clients');
const company = require('./model/company');
const centers = require('./model/centers');


var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var carRouter = require('./routes/car');
var ClintRouter = require('./routes/clint');
var CentersRouter = require('./routes/center');



var app = express();

const dbURI = 'mongodb+srv://tarcking:12345@nudetuts.vtv2cor.mongodb.net/note-tuts?retryWrites=true&w=majority' ;  
mongoose.connect(dbURI , {useNewUrlParser : true , useUnifiedTopology : true})
  .then((result)=> app.listen(8002))
  .catch((err)=> console.log(err));







// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));





app.get('/add-clients',(req ,res)=>{
  const fff = new clients({
    _id: '4sdvsd6' ,
    Name: 'fadi',
    Email : 'fadigmail.com' ,
    Password : '*****',
    services : {

      _id : '2222' ,
      name : 'track' , 
      name_of_company : 'zoon',
      time : '12/8/2020',
    },
  
  });
  
  fff.save()
  .then((result)=>{
    res.send(result)
  })
  .catch((err)=>{
  console.log(err)
  });
  })








app.get('/add-cars',(req ,res)=>{
  const ff = new cars({
    Car_plate : 'SY000000' ,
    Location: 'daamac',
    Quantity : 200 ,
    Type : 'BM2',
    Status : 'o3nline',
  
  });
  
  ff.save()
  .then((result)=>{
    res.send(result)
  })
  .catch((err)=>{
  console.log(err)
  });
  })





  app.get('/add-company',(req ,res)=>{
    const cc = new company({
      _id : 'da6261c',
      Name : 'zoon' ,
      Password  : 'fadi546515651'
    
    });
    
    cc.save()
    .then((result)=>{
      res.send(result)
    })
    .catch((err)=>{
    console.log(err)
    });
    })


    


  








app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mangecar',carRouter);
app.use('/mangeclint' , ClintRouter);
app.use('/mangecenter' ,CentersRouter);







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
