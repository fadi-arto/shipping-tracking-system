const { addclient } = require('../Models/Client/addclient');
const { deletclientbyid } = require('../Models/Client/deleteclient')
const { UpdateclientById } = require('../Models/Client/updateclient'); 
const { AddShipments } = require('../Models/Client/AddShipments'); 
const clients = require("../Entity/clients");
const Shipment = require('../Entity/Shipment');



const newclient = (req, res) => {
    const data = req.body;
    addclient(data,(err, result) => {
        if(err) {
            console.log(err)
            res.send(err)
        }
        else{
            res.send(result) 
        }
    })
}


const deleteclient = (req,res)=>{
 const id = req.params.id;
 deletclientbyid(id, (err,result)=>{
if(err){
    res.send(err);
}
else{
    res.send(result);
}

})    

}




const Updateclient = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    UpdateclientById(data ,id, (err, results,error) => {
        if (err){
            res.send(error);
        }else{
            res.send(results);
        }
    });

}



const AddShipment = (req, res) => {
    const data = req.body;
    const center_id = req.session.passport.user
    AddShipments(data,center_id,(err, result) => {
        if(err) {
            console.log(err)
            res.send(err)
        }
        else{
            res.send(result) 
        }
    })
}





const show_complaint_byname = (req,res)=>{
    try{
  
    let nameofcomlaint = req.body.Name;
    
    clients.findOne({Name:nameofcomlaint}, function(err,results){
    if(results){
    res.send(results.complaint);
    }
    else{
        res.send("dont have ");
    }
    })
    
    
    }
    catch(err){
        res.send("errore");
    }
    };





    const getallcomplaint = (req,res)=>{
                  
    clients.find( {} ,function(err,results){
        if(results){
            console.log(results.complaint)
        res.send(results.complaint);
        }
        else{
            res.send("dont have ");
        }
        })
        
    
        
     
        };


        const show_all_client = (req,res)=>{         
            clients.find({} ,function(err,results){
                if(results){
                    console.log("hereee")
                    console.log(results)
                    console.log("hereee")
                res.send(results);
                }
                else{
                    res.send("dont have any clilent ");
                }
                })
                
            
                
             
                };



const table_for_client = (req,res)=>{
let id = req.session.passport.user;
clients.findById(id,(err,result)=>{
if(err){
    console.log(err)
}else{
    console.log("fadi")
Shipment.find({},(err,result_shipment)=>{
 
      
    result_shipment.sort(function(a, b) {
        return a.DateStart - b.DateStart;
      });
      const len = result_shipment.length

      console.log(result_shipment[len-1]);
      console.log(result_shipment[len-2]);
      let obj = {
        x : result_shipment[len-1],
        y : result_shipment[len-2]
      }
      res.send(obj)
})
}
})

}


// state,DateStart,ExceptionTime,cost,DistinationLocation



module.exports = {newclient , deleteclient ,Updateclient , AddShipment,show_complaint_byname , getallcomplaint, show_all_client ,table_for_client };