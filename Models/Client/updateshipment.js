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

const Updateshipment_cost_ById = (data, id, result) => {
  console.log(data);
  Shipment.findByIdAndUpdate(
    id,
    { cost: data.cost},
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


const Updateshipment_service_ById = (data, id, result) => {
  console.log(data);
  Shipment.findByIdAndUpdate(
    id,
    { Services: data.Services},
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










module.exports = { UpdateshipmentById , Updateshipment_priority_ById,Updateshipment_cost_ById,Updateshipment_service_ById};
