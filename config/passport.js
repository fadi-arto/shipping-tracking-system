const use = require('passport');
const passport = require('passport');
const { Strategy } = require(passport-local);
const localStrategy =require('passport-local').Strategy;
const clients = require('../model/clients');




passport.use('local-signin', new localStrategy({
    usernameField  : 'Email',
    passwordField : 'Password',
    passReqToCallback :true,
    
    } , (req , email , password , done)=>{
        clients.findOne({email : email} , (err,clients)=>{
            if(err){
                return done(err)
            }
            if(! clients){
                return done(null , false , req.flash('signinError','this clients not found'))
            }
            if(! clients.comparePassword(password)){
                return done(null, false , req.flash('signinError','woring password'))
            }
            return done(null,clients)
    
        })
    
    
    }))

