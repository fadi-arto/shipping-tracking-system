const clients = require("../Entity/clients");
const Shipment = require("../Entity/Shipment");

const getShipment = (req, res) => {
  try {
    let id = req.session.passport.user;
    console.log(id);
    clients.findById(id, function (err, results) {
      Shipment.find({ EmailSource: results.email }).then((result) => {
        if (!result) {
          res.send("Don`t have shipment")
        } else {

          res.send(result);
        }
      });
    });
  } catch (error) {
    res.status(203).send("error");
  }
};

module.exports = { getShipment };
