const company = require('../model/company');
const { addcompany } = require('../Models/company/addcompany');
const { deletcompanybyid } =require('../Models/company/deletcompany');
const { UpdatecompanyById } = require('../Models/company/update');




const createcompany = (req,res) => {
    const data = req.body;
    addcompany(data,(err, result) => {
        if(err) {
            console.log(err)
            res.send(err)
        }
        else{
            res.send(result) 
        }
    })
}


const deletcompany = (req,res)=>{
    const id = req.params.id;
    deletcompanybyid(id, (err,result)=>{
   if(err){
       res.send(err);
   }
   else{
       res.send(result);
   }
   
   })    
   
   }


   const Updatecompany = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    UpdatecompanyById(data ,id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.send(results);
        }
    });

}


   




module.exports = { createcompany  , deletcompany , Updatecompany} ; 