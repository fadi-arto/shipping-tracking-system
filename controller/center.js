const { addcenter } = require('../Models/addcenter');
const center = require('.././views/model/centers');



//give the data from front end to models after that push to mongoose

const creatcenter = (req, res) => {
    const data = req.body;
    addcenter(data,(err, car) => {
        if(err) {
            console.log(err)
            res.send(err)
        }
        else{
            res.send(car) 
        }
    })
}

module.exports = { creatcenter };