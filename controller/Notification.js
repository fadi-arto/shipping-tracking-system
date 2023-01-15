const notfication = require('../Entity/notfication');
const centers = require('../Entity/centers');
const {AddEmail} = require('../Models/Notifecation/add_notifecation');

const createNotification = (req,res) => {
    const data = req.body;
    AddNotification(data,(err, result) => {
        if(err) {
            console.log(err)
            res.send(err)
        }
        else{
            res.send(result) 
        }
    })
}





const get_Notification = (req,res)=>{
let id = req.session.passport.user ;
centers.findById(id , (err,result)=>{
if (result){

    notfication.find({sender:result.Company},(err,result_note)=>{
    if(result_note){
    res.send(result_note.massage)
    }
    else{
    console.log(err)
    }
    
    })
    
    


}


})

    

}


module.exports = {createNotification,get_Notification}