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



const Updateshipment_priority_ById = (data, id, result) => {
  console.log(data);
  Shipment.findByIdAndUpdate(
    id,
    { priority: data.priority},
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



// const Update_shipment_location_By_carplate = (data, id, result) => {
//   console.log(data);
//   Shipment.findByIdAndUpdate(
//     id,
//     { priority: data.priority},
//     { new: true },
//     (err, results) => {
//       if (err) {
//         console.log(err);
//         result(err, null);
//       } else {
//         result(null, results);
//       }
//     }
//   );
// };












module.exports = { UpdateshipmentById , Updateshipment_priority_ById};
