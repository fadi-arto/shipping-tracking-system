const { addcar } = require('../Models/Car/addcar');
const { deletecarById } = require('../Models/Car/deletcar')
const { UpdatecarById } = require('../Models/Car/updatecar');
const { Updatecar_platById } =require('../Models/Car/updatecar_plate');
const { Update_state_car_ById } = require('../Models/Car/updatestatus_car')


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


const updatecar_plate = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    console.log(data);
    Updatecar_platById(data ,id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.send(results);
        }
    });

}




const update_state_car = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    console.log(data);
    Update_state_car_ById(data ,id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.send(results);
        }
    });

}








module.exports = { creatcar , deletecar , Updatecaree, updatecar_plate,update_state_car};



