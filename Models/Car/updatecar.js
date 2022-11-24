const { model } = require('mongoose')
const car = require('../../Entity/cars')



const UpdatecarById = (data, id, result) => { 
    car.findByIdAndUpdate(id,
        { Car_plate:data.Car_plate , Location:data.Location , Quantity:data.Quantity , Type:data.Type ,Status:data.Status},
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
module.exports = { UpdatecarById };


