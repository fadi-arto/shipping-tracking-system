const { model } = require('mongoose')
const car = require('../../Entity/cars')



const Update_state_car_ById = (data, id, result) => { 
    car.findByIdAndUpdate(id,
        { Status:data.Status},
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






module.exports = { Update_state_car_ById };


