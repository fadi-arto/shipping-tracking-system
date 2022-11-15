const { model } = require('mongoose');
const clint = require('../views/model/clients');



const deletclintbyid = (id , result) =>{
clint.findByIdAndDelete(id , function(err, results){
if(err){
    console.log(err);
    result(err, null)
}
else{
    result(null , results);
}

})

}

module.exports = { deletclintbyid };