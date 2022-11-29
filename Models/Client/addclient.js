const async = require('hbs/lib/async');
const {model}  = require('mongoose') ; 
const clients = require('../../Entity/clients');


//add data to mongoose

const  addclient = async (data , result) =>{

    clients.findOne({email : data.email},(err,resultss) =>{
        if(!resultss){
            console.log(data);
            clients.create({Name : data.Name , email: data.email ,password : new clients().hashPassword(data.password), complaint: data.complaint },(err , results )=>{
                if(err){
               result("Error regisatiration registered", null )
                }
                else{
                    result(null,results)
                }
             })
        }
        else{
            result("the email is already registered", null )
        }
        
        
    })
 
}

module.exports = {addclient} ;