const { model } = require('mongoose')
const company = require('../../model/company')



const UpdatecompanyById = (data, id, result) => { 
   console.log(data);
   company.findByIdAndUpdate(id,
        { Name:data.Name ,Email:data.Email ,Password:data.Password , center:data.center , Car:data.Car  },
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
module.exports = { UpdatecompanyById };


