const { model } = require('mongoose');
const company = require('../../Entity/company');



const deletecompanybyid = (id , result) =>{
company.findByIdAndDelete(id , function(err, results){
if(err){
    console.log(err);
    result(err, null)
}
else{
    result(null , results);
}

})

}

module.exports = { deletecompanybyid };