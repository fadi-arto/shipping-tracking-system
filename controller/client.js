const { addclient } = require('../Models/Client/addclient');
const { deletclientbyid } = require('../Models/Client/deleteclient')
const { UpdateclientById } = require('../Models/Client/updateclient');
const { AddShipments } = require('../Models/Client/AddShipments');
const clients = require("../Entity/clients");
const Shipment = require('../Entity/Shipment');
const centers = require('../Entity/centers');



const newclient = (req, res) => {
    const data = req.body
    const Client = req.session.passport.user
    addclient(data, Client,(err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        }
        else {
            res.send(result)
        }
    })
}


const deleteclient = (req, res) => {
    const id = req.params.id;
    deletclientbyid(id, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }

    })

}




const Updateclient = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    UpdateclientById(data, id, (err, results, error) => {
        if (err) {
            res.send(error);
        } else {
            res.send(results);
        }
    });

}



const AddShipment = (req, res) => {
    const data = req.body;
    const center_id = req.session.passport.user
    AddShipments(data, center_id, (err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        }
        else {
            res.send(result)
        }
    })
}

const Add_Shipment_Client = (req, res) => {
    const data = req.body;
    const center_id = req.session.passport.user
        AddShipments(data, center_id, (err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        }
        else {
            res.send(result)
        }
    })
}






const show_complaint_byname = (req, res) => {
    try {

        let nameofcomlaint = req.body.Name;

        clients.findOne({ Name: nameofcomlaint }, function (err, results) {
            if (results) {
                res.send(results.complaint);
            }
            else {
                res.send("dont have ");
            }
        })


    }
    catch (err) {
        res.send("errore");
    }
};





const getallcomplaint = (req, res) => {

    clients.find({}, function (err, results) {
        if (results) {
            console.log(results.complaint)
            res.send(results.complaint);
        }
        else {
            res.send("dont have ");
        }
    })




};


const show_all_client = (req, res) => {
    clients.find({}, function (err, results) {
        if (results) {
            console.log("hereee")
            console.log(results)
            console.log("hereee")
            res.send(results);
        }
        else {
            res.send("dont have any clilent ");
        }
    })




};



const table_for_client = async (req, res) => {
    let id = req.session.passport.user;
    try {
    const result = await clients.findById(id);
    const result_shipment = await Shipment.find({EmailSource:result.email});
    var len = result_shipment.length;
    console.log(result_shipment);
    console.log(len);
    result_shipment.sort(function (a, b) {
    return a.DateStart - b.DateStart;
    });
    
    for (let index = 0; index < result_shipment.length; index++) {
        console.log("1");
            var ids = result_shipment[len].center;
            const result_serach = await centers.findById(ids);
            console.log(result_serach);
            // array.push(result_serach);
        
    }
  
} catch (err) {
    console.log(err);
}
}

module.exports = { newclient, deleteclient, Updateclient, AddShipment, show_complaint_byname, getallcomplaint, show_all_client, table_for_client };