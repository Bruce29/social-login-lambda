var express = require('express');
var router = express.Router();
var passportGithub = require('../auth/github');
var passportFacebook = require('../auth/facebook');
var passportTwitter = require('../auth/twitter');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth/github', passportGithub.authenticate('github', { scope: [ 'user:email' ] }));
router.get('/auth/github/callback',
  passportGithub.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication
    res.json(req.user);
  });

router.get('/auth/facebook', passportFacebook.authenticate('facebook'));
router.get('/auth/facebook/callback', 
  passportFacebook.authenticate('facebook', { failureRedirect: '/login'}),
  function(req, res) {
    res.json(req.user);
  });

router.get('/auth/twitter', passportTwitter.authenticate('twitter'));
router.get('/auth/twitter/callback',
   passportTwitter.authenticate('twitter', {failureRedirect: '/login'}),
   function(req, res){
     res.json(req.user);
   });
   
module.exports = router;
