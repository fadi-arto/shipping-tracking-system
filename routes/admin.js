const express = require("express");
const { createcompany ,deletecompany ,Updatecompany} = require("../controller/company");
var router = express.Router();

router.post('/Create_Company' ,createcompany);
router.delete('/deletcompany/:id' , deletecompany);
router.put('/update/:id' ,Updatecompany );


function admin_isAuthenticated(req,res,next){
  if(!req.isAuthenticated())
    console.log("NOT_Authenticated");
    else{
    console.log("Authenticated");
    next()
    }
}

module.exports = router;
