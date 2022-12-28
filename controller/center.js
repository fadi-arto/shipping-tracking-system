const { addcenter } = require('../Models/Center/addcenter');
const center = require('../Entity/centers');
const  {deletecenterById} = require('../Models/Center/deletcenter');
const { UpdatecenterById } = require('../Models/Center/updatecenter');
const { request } = require('express');
const company = require('../Entity/company');




//give the data from front end to models after that push to mongoose

const creatcenter = (req, res) => {
    const data = req.body;
    console.log(req.isAuthenticated());
    addcenter(data,req.session.passport.user,(err, car) => {//ID PRESON WHO LOGIN 
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




const fin_cnnter_same_company = (req,res)=>{
    let id = req.session.passport.user;
center.find({},(err,result_center)=>{
if(err){

    console.log(err);
    }
    else{
company.findById(id,(err,result_comany)=>{
if(result_comany.name==result_center.name){

    res.send(result_center);
}
else{

    res.send("dont have cener here")
}


})

    }

})

}




module.exports = { creatcenter  , deletcenter , Updatecenter , findAllCenters,fin_cnnter_same_company };