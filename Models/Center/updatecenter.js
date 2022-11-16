const { model } = require('mongoose')
const center= require('../../model/centers')



const UpdatecenterById = (data, id, result) => { 
    center.findByIdAndUpdate(id,
        { Location:data.Location , Name:data.Name },
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
module.exports = { UpdatecenterById };


