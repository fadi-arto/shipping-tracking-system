const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const clients = require("../Entity/clients");
const company = require("../Entity/company");

const bcrypt = require("bcrypt");

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser((id, done) => {
  clients.findById(id, (err, user) => {
    if (user) {
      return done(err, user);
    } else {
      company.findById(id, (err, users) => {
        if(users){
          return done(err, users);
        }
      });
    }
  });
});

passport.use(
  "local-signin",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    (req, email, password, done) => {
      clients.findOne({ email: email }, (error, user) => {
        if (error) {
          return done(error, false); // User : false
        }
        if (!user) {
          return done(
            null,
            false,
            req.flash("signinError", "user is not found")
          ); // User : false
        }
        if (bcrypt.compareSync(password, user.password)) {
          return done(null, user);
        } else {
          return done(null, false, req.flash("signinError", "worng passwoed"));
        }
      });
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
