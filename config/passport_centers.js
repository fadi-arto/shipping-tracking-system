const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const clients = require("../Entity/clients");
const centers = require("../Entity/centers");

const bcrypt = require("bcrypt");

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log("d");
    centers.findById(id, (err, users) => {
        if(users){
          return done(err, users);
        }
        else{
          clients.findById(id, (err, client) => {
            if(client){
              console.log("add");
              return done(err, client);
            }
          })
        }
      });
});

 
passport.use(
  "local-centers",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    (req, email,passwoed ,done) => {
     centers.findOne({ email: email },(err, user) => {
        if(err){
          console.log("1");
          return done(err, false);
        }
        else if(!user){
          console.log("2")
          return done(
            null,
            false,
            req.flash("signinError", "user is not found")
          );
        }
        else{
          console.log("3");
          console.log(user.id);
          return done(null, user);
        }
      })
    }
  )
);

passport.use(
  "local-signins",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    (req, email, password, done) => {
      company.findOne({ email: email }, (error, user) => {
        if (error) {
          return done(error, false); // User : false
        }
        if (!user) {
          // console.log("3");
          return done(
            null,
            false,
            req.flash("signinError", "user is not found")
          ); // User : false
        }
        if (bcrypt.compareSync(password, user.password)) {
          return done(null, user);
        } else {
          console.log("3");
          return done(null, false, req.flash("signinError", "worng passwoed"));
        }
      });
    }
  )
);

passport.use(
  "local-client",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    (req, email, password, done) => {
      console.log("loign");
      clients.findOne({ email: email }, (error, user) => {
        if (error) {
          console.log("1");
          return done(error, false); // User : false
        }
        if (!user) {
          console.log("3");
          return done(
            null,
            false,
            req.flash("signinError", "user is not found")
          ); 
        }
        if (bcrypt.compareSync(password, user.password)) {
          console.log("2");
          return done(null, user);
        } else {
          console.log("4");
          return done(null, false, req.flash("signinError", "worng passwoed"));
        }
      });
    }
  )
);

