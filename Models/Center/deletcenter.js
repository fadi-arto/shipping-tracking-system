const { model } = require('mongoose')
const center = require('../../Entity/centers');

 const deletecenterById = (id, result) => {

    center.findByIdAndDelete(id, function (err, results) {
    if(err) {
        console.log(err);
        result(err, null);
    } else {
        result(null, results);
    }
})     
}
      

module.exports = { deletecenterById } ;






