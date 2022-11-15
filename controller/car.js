const { creat } = require('../Models/addcar');
const car = require('.././views/model/cars');



const creat = (req, res) => {
    const data = req.body;
    car(data,(err, car) => {
        if(err) {
            console.log(err)
            res.send(err)
        }
        else{
            res.send(car) 
        }
    })
}