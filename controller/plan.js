const { request } = require('express');
const {Addplan} =require('../Models/plan/add_plan');
const { model } = require('mongoose');
const plan = require('../Entity/plan');
const shipment = require('../Entity/Shipment');
const company = require('../Entity/company');
const center = require('../Entity/centers');

const createplan = (req,res) => {
    const data = req.body;
    Addplan(data,(err, result) => {
        if(err) {
            console.log(err)
            res.send(err)
        }
        else{
            res.send(result) 
        }
    })
}
// const Update_shipment_cost = (req, res) => {
//     const data = req.body;
//     const id = req.params.id;
//     Updateshipment_cost_ById(data, id, (err, results) => {
//       if (err) {
//         res.send(err);
//       } else {
//         res.send(results);
//       }
//     });
  
//   }

const update_source_distination = (req,res)=>{
    const id = req.params.id;
shipment.findById(id, (err,result)=>{
if(result){
plan.findOneAndUpdate({},(err,result_plan)=>{
result.SourceLocation

})

}

})

}

// const find_all_plan_center = (req, res) => {
//     let id = "63ab0aaadf886247b01f0234";
    
//     plan.find({}, (err, result_plan) => {
//       if (err) {
  
//         console.log(err);
//       }
//       else {
//         company.findById( id , (err, result_company) =>{
//           if(err){
//             console.log(err);
//           }
//           else{
//             center.find({Company:result_company.name}, (err, result_center) => {
//               for (let index = 0; index < result_center.length; index++) {
//                 if (result_center[index].id == result_plan.company) {
//                   res.send(result_plan);
//                 } 
//               }
             
//               // else {
//               //   res.send("dont have shippment on this center")
//               // }
//             })
//           }
//         })
//       }
//     })
  
//   }


// const find_all_plan_center = (req, res) => {
//     let id = req.session.passport.user;
//     plan.find({},(err,result)=>{
// if(err){
//     console.log(err)
// }
// else{
//     center.findById(id , (err,result_center)=>{
        
//     if(result_center.company==result.company){
// res.send(result)

//     }
//     else{
//         res.send(err)
//     }

//     })
  
//     }

//     })


// }


const find_all_plan_center = (req,res)=>{
let id = req.session.passport.user;
center.findById(id , (err,result_center)=>{
if(err){

console.log(err)
}
else{
plan.find({company:result_center.Company},(err,result)=>{
if(result){
    // console.log(result)
    res.send(result)
}
else{
    console.log(err)
}

})

}

})



}

const find_plan_company = (req,res)=>{
    let id =req.session.passport.user;
    company.findById(id , (err,result_company)=>{
    if(err){
    
    console.log(err)
    }
    else{
    plan.find({company:result_company.name},(err,result)=>{
    if(result){
        // console.log(result)
        res.send(result)
    }
    else{
        console.log(err)
    }    
    })    
    }    
    })
}



const add_shipment_to_plane = (req,res)=>{
let data = req.body;
let id_plan = req.body
shipment.findById(data.shipment , (err ,result_shipment)=>{
if(result_shipment){
    const c =result_shipment.Car_plate;
    const s = result_shipment.SourceLocation;
    const d = result_shipment.DistinationLocation;
plan.findByIdAndUpdate(
    data.plan,
    {$push: {"source_location": s , "distination_location" : d , "CaR" :c} },
    {safe: true, upsert: true},
    function(err, model) {
        if(err){
        console.log(err);
        }
        else{
            console.log("good")
        }
    }
);
}
})
}





module.exports={createplan,find_all_plan_center,find_plan_company,add_shipment_to_plane};