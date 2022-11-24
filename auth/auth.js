const company = require('../Entity/company');
const client = require('../Entity/clients');



 function sign_Company(req, res, next) {
    if (req.isAuthenticated()) {       
        if(req.session.customer === "company"){
            next()
        }
    }
    else{
    res.status(203).send("not authenticated like company")
}
}



function sign_client(req, res, next) {
    if (req.isAuthenticated()) {   
        if(req.session.customer === "client"){
            next()
        }
    }
    else{
    res.status(203).send("not authenticated like client")
}
}
  
function Client_isAuthenticated(req,res,next){
    if(!req.isAuthenticated())
      console.log("NOT_Authenticated");
      else{
        console.log(req.session);
      console.log("Authenticated");
      next()
      }
  }



module.exports = { sign_Company  , sign_client , Client_isAuthenticated} ;