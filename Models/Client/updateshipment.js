const { model } = require("mongoose");
const Shipment = require("../../Entity/Shipment");

const UpdateshipmentById = (data, id, result) => {
  console.log(data);
  Shipment.findByIdAndUpdate(
    id,
    { state: data.state},
    { new: true },
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};
module.exports = { UpdateshipmentById };
