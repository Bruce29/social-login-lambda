/**
 * Bruno Rivera
 */
const express = require('express')
var passport = require('passport');
var session = require('express-session');
//var mongoConnection = require('./app/dataaccess/mongoconfig/mongoconfig');
var userBusiness = require('./app/business/userBusiness');
const app = express()
app.use(express.json());  
const port = process.env.PORT || 3011
app.listen(port, () => console.log(`App is listening on port ${port}.`))*/
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  }));
app.use(passport.initialize());
app.use(passport.session());
// *** routes *** //
var routes = require('./app/routes/routes.js');

// *** main routes *** //
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);    
    next(err);
  });

module.exports = app;