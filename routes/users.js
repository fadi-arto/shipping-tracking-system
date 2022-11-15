var express = require('express');
var router = express.Router();
const passport = require('passport');

const cars=require('../views/model/cars');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/car',(req,res,next)=>{
const car_1 =  new cars({
  Car_plate : req.body.Car_plate ,
  Location: req.body.Location,
  Quantity : req.body.Quantity ,
  Type : req.body.Type,
  Status : req.body.Status,

});
car_1.save()
.then((result)=>{
  res.send(result)
  .cath((err)=>{
    console.log(err)
  });
})

})















module.exports = router;
