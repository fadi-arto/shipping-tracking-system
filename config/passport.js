var path = require('path');
const use = require('passport');
const passport = require('passport');
//const { Strategy } = require(passport);
const localStrategy =require('passport-local').Strategy;
const clients = require('../model/clients');







passport.serializeUser((user , done)=>{
     return done(null , user.id);
    
    })
    
    passport.deserializeUser((id , done)=>{  
        clients.findById(id ,(err ,user)=>{
           return done(err , user);
    
        })
    })
    





    passport.use('local',new localStrategy(
        function(email, password, done) {
            clients.findOne({ email: email }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.comparePassword(password)) { return done(null, false); }
            return done(null, user);
            console.log(email);
            console.log(password);
          });
        }
      ));
       
 


    //   passport.use('local', new localStrategy({
    //     usernameField: 'email',
    //     passwordField: 'password',
    //     passReqToCallback: true
    // }, (req, email, password, done) => {
    //     console.log(email)
    //     clients.findOne({ email: email , password :password }, (err, user) => {
    //         if (err) {
    //             return done(err, req.flash("signinError", "ERROR in find  "));
    //         }
    //         if(user) {
    //             user.comparePassword(password)
    //              return done(null, user);
    //             }
    //             else {
    //              return done(null, false, req.flash("signinError", "password is incorrect"));
    //             }
    //         })}))
    











////gooooooood





// passport.use('local-signin', new localStrategy({
//     usernameField  : 'email',
//     passwordField : 'password',
//     passReqToCallback :true,
    
//     } , (req , email , password , done)=>{
//         clients.findOne({Email :email} , (err,user)=>{
//             if(err){
//                 return done(err, req.flash("signinError", "ERROR in find  "));
//             }
//             if(user){
//                 user.comparePassword(password)
             //return done(null, user);
//             }
//             if(! user.comparePassword(password)){

//                 return done(null, false , req.flash('signinError','woring password'))
//             }
//             return done(null,user)
    
//         })
    
    
//     }))





 
        