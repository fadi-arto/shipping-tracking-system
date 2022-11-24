const { model } = require("mongoose");
const clients = require("../../Entity/clients");

const UpdateclientById = (data, id, result) => {
  console.log(data);
  clients.findByIdAndUpdate(
    id,
    { Name: data.Name, email: data.email, password: data.password },
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
module.exports = { UpdateclientById };
