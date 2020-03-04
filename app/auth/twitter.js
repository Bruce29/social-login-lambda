var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var credentials = require('../config/config');
var init = require('./init');


passport.use(new TwitterStrategy({
  consumerKey: credentials.twitter.clientID,
  consumerSecret: credentials.twitter.clientSecret,
  callbackURL: credentials.twitter.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {

 /*    var searchQuery = {
      name: profile.displayName
    };

    var updates = {
      name: profile.displayName,
      someID: profile.id
    };

    var options = {
      upsert: true
    }; */

    var user ={
      id: 1,
      name: 'BruceTwitter29',
      someID: '254485508'
    };
    done(null, user);
    // update the user if s/he exists or add a new user
    /* User.findOneAndUpdate(searchQuery, updates, options, function(err, user) {
      if(err) {
        return done(err);
      } else {
        return done(null, user);
      }
    }); */
  }

));

// serialize user into the session
init();


module.exports = passport;