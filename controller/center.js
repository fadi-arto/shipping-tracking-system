const { addcenter } = require('../Models/Center/addcenter');
const center = require('../Entity/centers');
const  {deletecenterById} = require('../Models/Center/deletcenter');
const { UpdatecenterById } = require('../Models/Center/updatecenter');
const { request } = require('express');




//give the data from front end to models after that push to mongoose

const creatcenter = (req, res) => {
    const data = req.body;
    console.log(req.isAuthenticated());
    addcenter(data,req.session.passport.user,(err, car) => {
        if(err) {
            res.send(err)
        }
        else{
            res.send(car) 
        }
    })
}


const deletcenter = (req,res)=>{
    const id = req.params.id;
    deletecenterById(id, (err,result)=>{
   if(err){
       res.send(err);
   }
   else{
       res.send(result);
   }
   
   })    
   
   }



   const Updatecenter = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    UpdatecenterById(data ,id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.send(results);
        }
    });

}
 
const findAllCenters = (req, res) => {
    try {
        center.find(function(err , results){
            res.send(results)
        })
    }
    catch(err){
        res.send("errore");

    }
}




module.exports = { creatcenter  , deletcenter , Updatecenter , findAllCenters };