const { addclint } = require('../Models/Cliant/addclint');
const { deletclintbyid } = require('../Models/Cliant/deleteclint')
const clients = require('../model/clients');
const { UpdateclintById } = require('../Models/Cliant/updateclint'); 



const newclint = (req, res) => {
    const data = req.body;
    addclint(data,(err, result) => {
        if(err) {
            console.log(err)
            res.send(err)
        }
        else{
            res.send(result) 
        }
    })
}


const deletclint = (req,res)=>{
 const id = req.params.id;
 deletclintbyid(id, (err,result)=>{
if(err){
    res.send(err);
}
else{
    res.send(result);
}

})    

}




const Updateclint = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    UpdateclintById(data ,id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.send(results);
        }
    });

}








module.exports = {newclint , deletclint ,Updateclint};