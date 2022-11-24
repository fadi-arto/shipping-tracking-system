const { model } = require("mongoose");
const clients = require("../../Entity/clients");

const deletclientbyid = (id, result) => {
  clients.findByIdAndDelete(id, function (err, results) {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

module.exports = { deletclientbyid };
