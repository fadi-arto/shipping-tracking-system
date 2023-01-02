const { model } = require("mongoose");
const Shipment = require("../../Entity/Shipment");

const UpdateshipmentById = (data, id, result) => {
  console.log(data);
  Shipment.findByIdAndUpdate(
    id,
    { state: data.state },
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
    { priority: data.priority },
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
    { cost: data.cost },
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


const Updateshipment_cost_rate_ById = (data, id, result) => {
  console.log(data);
Shipment.findById(id,(err,resulted)=>{
  if(resulted){
    Shipment.findByIdAndUpdate(
      id,
      { cost: resulted.cost*data.rate/100},
      { new: true },
      (err, results) => {
        if (err) {
          result(err, null);
        } else {
          result(null, results);
        }
      }
    );
  }
})

};








const Updateshipment_service_ById = (data, id, result) => {
  console.log(data);
  Shipment.findByIdAndUpdate(
    id,
    { Services: data.Services },
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




const Updateshipment_Evaloation_ById = (data, id, result) => {
  console.log(data);
  Shipment.findByIdAndUpdate(
    id,
    { Evaloation: data.Evaloation },
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





const Updateshipment_Location_ById = (data, id, result) => {
  console.log(data);
  Shipment.findByIdAndUpdate(
    id,
    { Location: data.Location },
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




const Updateshipment_Late_shipment_ById = (data, id, result) => {
  console.log(data);
  Shipment.findByIdAndUpdate(
    id,
    { LateShipment: data.LateShipment },
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









module.exports = { UpdateshipmentById, Updateshipment_priority_ById, Updateshipment_cost_ById, Updateshipment_service_ById, Updateshipment_Evaloation_ById, Updateshipment_Location_ById, Updateshipment_Late_shipment_ById, Updateshipment_cost_rate_ById };
