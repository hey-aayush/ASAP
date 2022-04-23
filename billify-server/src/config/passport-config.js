//Configuration of Local Strategy for authentication using Passport

const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const User = require('../models/User')

module.exports = function (passport) {
    passport.use(
      new localStrategy({usernameField: "email"}, (email, password, done) => {
            User.findOne({ email: email }, (err, user) => {
              if (err) throw err;
              if (!user) return done(null, false,{message:'No user with that email'});
              bcrypt.compare(password, user.password, (err, result) => {
                  if (err) throw err;
                  if (result === true) {
                      return done(null, user);
                  } else {
                      return done(null, false, {message:'Password Incorrect'});
                  }
              });
            });
      })
    );

    passport.serializeUser((user, done) => {
      done(null, user._id);
    });
    
    passport.deserializeUser((id, done) => {
      User.findOne({ _id: id }, (err, user) => {
          done(err, user);
      });
    });
};