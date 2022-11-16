const { model } = require('mongoose')
const clint = require('../../model/clients')



const UpdateclintById = (data, id, result) => { 
   console.log(data);
    clint.findByIdAndUpdate(id,
        { Name:data.Name ,Email:data.Email , Password:data.Password , services:{id:data.id ,name:data.name , name_of_company:data.name_of_company,time:data.time}  },
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
module.exports = { UpdateclintById };


