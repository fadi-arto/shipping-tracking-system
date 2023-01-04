const { addcar } = require('../Models/Car/addcar');
const { deletecarById } = require('../Models/Car/deletcar')
const { UpdatecarById } = require('../Models/Car/updatecar');
const { Updatecar_platById } =require('../Models/Car/updatecar_plate');
const { Update_state_car_ById } = require('../Models/Car/updatestatus_car')
const cars = require('../Entity/cars');
const { request } = require('express');
const company = require('../Entity/company');

const center = require('../Entity/centers');

//give the data from front end to models after that push to mongoose

const creatcar = (req, res) => {
    const data = req.body;
    console.log(req.isAuthenticated());
    addcar(data,req.session.passport.user,(err, car) => {
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


const findall = (req, res) => {
    try {
        const id = req.session.passport.user
        let arr = []
        cars.find(function(err , results){
            if(results){
                center.findById(id,(err,results_center)=>{
                  for (let index = 0; index < results.length; index++) {
                    if(results[index].company === results_center.Company){
                        arr.push(results[index].Location)
                    }
                  }
                 console.log(arr);
                })
            }
            else{
                res.send("not found Car in company")
              }
        })
    }
    catch(err){
        res.send("errore");

    }
}
const Car_Company = (req, res) => {
    try {
        const id = req.session.passport.user
        console.log(id);
        company.findById(id,(err, company) =>{
            if(company){
                console.log(company);
                cars.find({company:company.name},function(err , results){
                    res.send(results)
                    })
            }
            else{
                console.log("login error");
            }
        })
      
    }
    catch(err){
        res.send("errore");

    }
}

const find_car_by_plate = (req,res)=>{
try{
//let id = req.params.id;
let Carplate = req.body.Car_plate;

cars.findOne({Car_plate:Carplate}, function(err,results){
if(results){
    console.log("acas");
res.send(results.Location);
}
else{
    res.send("this Car_plate not find");
}
})


}
catch(err){
    res.send("errore");
}
};




const fin_car_same_company = (req,res)=>{
    let id = req.session.passport.user;
cars.find({},(err,result_car)=>{
if(err){

    console.log(err);
    }
    else{
company.findById(id,(err,result_comany)=>{
if(result_comany.name==result_car.name){

    res.send(result_car);
}
else{

    res.send("dont have car here")
}


})

    }

})

}



 const profile=(req,res)=>{
   let id = req.session.passport.user;
   cars.findById(id,(err,car)=>{
    if(car){
        cars.find({Car_plate:car.Car_plate},(err,result_car)=>{
            if(result_car){
            res.send(result_car).status(200)
            
            }
            else{
            console.log(err);
            
            }
            
            
               })
    }
   })
   

 }







module.exports = { creatcar , deletecar , Updatecaree, updatecar_plate,update_state_car,find_car_by_plate, findall, Car_Company ,fin_car_same_company,profile};



