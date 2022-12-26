const { model } = require('mongoose');
const store = require('../../Entity/store');



const deletstorebyid = (id , result) =>{
store.findByIdAndDelete(id , function(err, results){
if(err){
    console.log(err);
    result(err, null)
}
else{
    result(null , results);
}

})

}

module.exports = { deletstorebyid };