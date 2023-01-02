const clients = require("../Entity/clients");
const center = require('../Entity/centers');
const Shipment = require("../Entity/Shipment");
const cars = require('../Entity/cars');
const { UpdateshipmentById, Updateshipment_priority_ById, Updateshipment_cost_ById, Updateshipment_service_ById, Updateshipment_Evaloation_ById, Updateshipment_Location_ById, Updateshipment_Late_shipment_ById ,Updateshipment_cost_rate_ById} = require('../Models/Client/updateshipment')
const { deleteshipment } = require('../Models/Client/deleteshipment');
const { show_complaint_byname } = require("./client");
const company = require('../Entity/company');


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



const Updateshipment_state = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  UpdateshipmentById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });

}


const Update_shipment_cost = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  Updateshipment_cost_ById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });

}



const Update_shipmen_discount_rate_cost = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  Updateshipment_cost_rate_ById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });

}






const Update_shipment_service = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  Updateshipment_service_ById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });

}

const Update_shipment_Evaloation = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  Updateshipment_Evaloation_ById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });

}
const Update_shipment_LOcation = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  Updateshipment_Location_ById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });

}


const Update_shipment_Lateshipment = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  Updateshipment_Late_shipment_ById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });

}













const deletesshipment_by_id = (req, res) => {
  const id = req.params.id;
  deleteshipment(id, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(result);
    }

  })

}


const Updateshipment_priority = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  Updateshipment_priority_ById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });

}




const get_location_by_carplate_for_shipment = (req, res) => {
  let id = req.params.id;
  Shipment.findById(id, (err, results_shipment) => {
    if (err) {
      console.log(err);
    }
    else {
      cars.findOne({ Car_plate: results_shipment.Car_plate }, (err, result_car) => {
        if (result_car) {
          results_shipment.Location = result_car.Location;
          results_shipment.save()
        }
        else {
          console.log(err);

        }
      })
    }
  })
  res.send("ok");
}





const get_Quantity_by_carplate_for_shipment = (req, res) => {
  let id = req.params.id;
  Shipment.findById(id, (err, results_shipment) => {
    if (err) {
      console.log(err);
    }
    else {
      cars.findOne({ Car_plate: results_shipment.Car_plate }, (err, result_car) => {
        if (result_car) {
          console.log(result_car.Quantity);

        }
        else {
          console.log(err);

        }
        res.sendStatus(result_car.Quantity);
      })
    }
  })

  //res.send(result_car.Quantity);
}

const get_shippment_done = (req, res) => {

  Shipment.find({ state: "done" }, (err, result) => {
    if (result) {
      console.log("asc")
      res.send(result);
    }
    else {
      // res.send("dont have shipment done")
      console.log("dont have shippment")
    }

  })

}


const get_shippment_by_id = (req, res) => {
  let id = req.params.id
  Shipment.findById(id, (err, result) => {
    if (result) {
      res.send(result)

    }
    else {
      res.send("dont have this shipment")
    }

  })

}



const fin_shipment_same_center = (req, res) => {
  let id = req.session.passport.user;
  Shipment.find({}, (err, result_shippment) => {
    if (err) {

      console.log(err);
    }
    else {
      center.findById(id, (err, result_center) => {
        if (result_center.id == result_shippment.center) {

          res.send(result_shippment);
        }
        else {

          res.send("dont have shippment on this center")
        }
      })
    }

  })

}

const fin_shipment_company = (req, res) => {
  let id = req.session.passport.user;
  let arr = []
  Shipment.find({}, (err, result_shippment) => {
    if (err) {

      console.log(err);
    }
    else {
      company.findById( id , (err, result_company) =>{
        if(err){
          console.log(err);
        }
        else{
          center.find({Company:result_company.name}, (err, result_center) => {
            for (let index = 0; index < result_center.length; index++) {
              if (result_center[index].id == result_shippment.center) {
                res.send(result_shippment);
              } 
            }
           
            // else {
            //   res.send("dont have shippment on this center")
            // }
          })
        }
      })
    }
  })

}





const get_shippment_done_and_wait = (req, res) => {
  const id = req.sesion.passport.user;
  Shipment.find({center:id}, (err, result) => {
    if (result.state==="done" || result.state==="wait") {
      res.send(result);
    }
    else {
      
      console.log("dont have shippment")
    }

  })

}






module.exports = { getShipment, get_Quantity_by_carplate_for_shipment, Updateshipment_state, deletesshipment_by_id, Updateshipment_priority, get_location_by_carplate_for_shipment, Update_shipment_cost, Update_shipment_service, Update_shipment_Evaloation, Update_shipment_LOcation, Update_shipment_Lateshipment, get_shippment_done, get_shippment_by_id, fin_shipment_same_center,Update_shipmen_discount_rate_cost,get_shippment_done_and_wait };
