 
const center = require('../../Entity/centers');
const company = require('../../Entity/company');


//add data to mongoose

const  addcenter = async (data , comany_id ,result) =>{
    center.find({},(err,centers)=>{
        if(err){
            console.log(err);
        }
        else{
            company.findById(comany_id,(err,companyes)=>{
                if(companyes){
                    center.create({Company:companyes.name,Location:data.Location,branch:centers.length+1,email:data.email},(err , results)=>{
                        if(err){
                       console.log(err)
                       result(err, null)
                        }
                        else{
                            result(null,results)
                        }
                    
                     })
                }
            });
          
        }
    })

}

module.exports = { addcenter } ;