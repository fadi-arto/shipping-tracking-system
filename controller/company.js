const company = require('../model/company');
const { addcompany } = require('../Models/company/addcompany');




const createcompany = (req,res) => {
    const data = req.body;
    addcompany(data,(err, result) => {
        if(err) {
            console.log(err)
            res.send(err)
        }
        else{
            res.send(result) 
        }
    })
}

module.exports = { createcompany } ; 