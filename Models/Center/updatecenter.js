const { model } = require('mongoose')
const center= require('../../model/centers')



const UpdatecenterById = (data, _id, result) => { 
    center.findByIdAndUpdate(_id,
        { _id:data._id , Location:data.Location , Name:data.Name },
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


