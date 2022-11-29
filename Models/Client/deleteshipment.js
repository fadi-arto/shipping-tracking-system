const { model } = require("mongoose");
const shipment = require("../../Entity/Shipment");

const deleteshipment = (id, result) => {
    shipment.findByIdAndDelete(id, function (err, results) {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

module.exports = { deleteshipment };
