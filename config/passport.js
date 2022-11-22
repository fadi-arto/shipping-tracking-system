var path = require('path');
const use = require('passport');
const passport = require('passport');
//const { Strategy } = require(passport);
const localStrategy =require('passport-local').Strategy;
const clients = require('../model/clients');







passport.serializeUser((user , done)=>{
     done(null , user.id);
    
    })
    
    passport.deserializeUser((id , done)=>{  
        clients.findById(id ,(err ,user)=>{
            done(err , user);
    
        })
    })
    


    passport.use('local',new localStrategy(
        function(email, password, done) {
            clients.findOne({ Email: email }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.comparePassword(password)) { return done(null, false); }
            return done(null, user);
          });
        }
      ));
       
 




// passport.use('local-signin', new localStrategy({
//     usernameField  : 'email',
//     passwordField : 'password',
//     passReqToCallback :true,
    
//     } , (req , email , password , done)=>{
//         clients.findOne({Email :email} , (err,user)=>{
//             if(err){
//                 return done(err)
//             }
//             if(! user){
//                 return done(null , false , req.flash('signinError','this clients not found'))
//             }
//             if(! user.comparePassword(password)){

//                 return done(null, false , req.flash('signinError','woring password'))
//             }
//             return done(null,user)
    
//         })
    
    
//     }))

