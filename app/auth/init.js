var passport = require('passport');

module.exports = function() {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    var user ={
      id: 1,
      name: 'Bruce29',
      someID: '254485508'
    };
    done(null, user);
    /* User.findById(id, function (err, user) {
      done(err, user);
    }); */
  });

};
