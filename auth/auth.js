const company = require('../Entity/company');



 function sign_Company(req, res, next) {
    if (req.isAuthenticated()) {
        var massag = req.user;
        if(req.session.customer === "company"){
            next()
        }
    }
    else{
    res.status(203).send("not authenticated like company")
}
}

module.exports = { sign_Company } ;