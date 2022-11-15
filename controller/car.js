const { addcar } = require('../Models/addcar');
const { deletecarById } = require('../Models/deletcar')
const car = require('.././views/model/cars');
const {UpdatecarById} = require('../Models/updatecar');


//give the data from front end to models after that push to mongoose

const creatcar = (req, res) => {
    const data = req.body;
    addcar(data,(err, car) => {
        if(err) {
            console.log(err)
            res.send(err)
        }
        else{
            res.send(car) 
        }
    })
}



const deletecar = (req,res)=>{
    const id = req.params.id;
    deletecarById(id ,(err,results)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(results)
        }
    })

}

const Updatecaree = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    UpdatecarById(data ,id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.send(results);
        }
    });

}




module.exports = { creatcar , deletecar , Updatecaree};



