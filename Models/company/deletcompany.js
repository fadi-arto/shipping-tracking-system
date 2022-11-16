const { model } = require('mongoose');
const company = require('../../model/company');



const deletcompanybyid = (id , result) =>{
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

module.exports = { deletcompanybyid };