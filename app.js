/**
 * Bruno Rivera
 */
const express = require('express')
var passport = require('passport');
var session = require('express-session');
const app = express()
/*
app.get('/', (req, res) => res.send('Running a node-express app!'))

app.get('/:name', function(req, res){
    res.send('Req params: ' + req.params.name);
});

app.post('/:name', function (req, res) {
    res.send('Got a POST request');
});

app.put('/:name', function (req, res) {
    res.send('Got a PUT request');
});

app.delete('/:name', function (req, res) {
    res.send('Got a DELETE request');
});
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