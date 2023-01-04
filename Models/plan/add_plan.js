const async = require('hbs/lib/async');
const {model}  = require('mongoose') ; 
const plane = require('../../Entity/plan');
const center = require('../../Entity/centers');




const  Addplan = async (data , results) =>{
    const id = req.session.passport.user
    center.findById(id,(err,results)=>{
        if(results){
            plane.create({CaR:data.CaR , start_time:data.start_time , source_location:data.source_location,company:results.Company},(err,result)=>{
                if(err){
                    console.log(err)
                     results(err, null)
                     }
                 else{
                     results(null,result)
                  }
                                        
        
            })
        }
    })
  
}

module.exports = { Addplan } ;