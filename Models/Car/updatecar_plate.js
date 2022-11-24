const { model } = require('mongoose')
const car = require('../../Entity/cars')



const Updatecar_platById = (data, id, result) => { 
    car.findByIdAndUpdate(id,
        { Car_plate:data.Car_plate},
        {new: true },
        (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {    

                result(null, results);
            }
        })
        
}
module.exports = { Updatecar_platById };


