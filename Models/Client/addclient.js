const async = require('hbs/lib/async');
const {model}  = require('mongoose') ; 
const clients = require('../../Entity/clients');


//add data to mongoose

const  addclient = async (data, Client , result) =>{

    clients.findOne({email : data.email},(err,resultss) =>{
        if(!resultss){
            console.log(data);
            clients.create({Name : data.Name , email: data.email ,password : new clients().hashPassword(data.password),phone:data.phone , Centers:Client},(err , results )=>{
                if(err){
                    console.log(err);
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