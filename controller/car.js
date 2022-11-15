const { addcar } = require('../Models/addcar');
const car = require('.././views/model/cars');



const creatcar = (req, res) => {
    const data = req.body;
    addcar(data,(err, car) => {
        if(err) {
            console.log(err)
            res.send(err)
        }
        else{
            res.send(car) 
        }
    })
}

module.exports = creatcar;