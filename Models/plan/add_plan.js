const async = require('hbs/lib/async');
const {model}  = require('mongoose') ; 
const plane = require('../../Entity/plan');
const center = require('../../Entity/centers');



//req.session.passport.user
const  Addplan = async (data , results) =>{
    const id =req.session.passport.user
    center.findById(id,(err,result)=>{
        if(result){
            plane.create({CaR:data.CaR , start_time:data.start_time , source_location:data.source_location,company:results.Company},(err,plan)=>{
                if(err){
                    console.log(err)
                     results(err, null)
                     }
                 else{
                     results(null,plan)
                  }
                                        
        
            })
        }
    })
  
}

module.exports = { Addplan } ;