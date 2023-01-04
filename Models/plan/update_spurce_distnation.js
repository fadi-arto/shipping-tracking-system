const { model } = require("mongoose");
const plane = require("../../Entity/plan");

const Update_plan_tById = (data, id, result) => {
  console.log(data);
  plane.findByIdAndUpdate(
    id,
    { source_location: data.source_location , distination_location: data.distination_location },
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
module.exports = { Update_plan_tById };
