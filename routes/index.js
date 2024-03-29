const express = require('express');
const router = express.Router();
const passport = require('passport');
const Mood = require('../models/mood');

router.get('/', function(req, res, next) {
  Mood.find({}, function(err, moods) {
    res.render('moods/index', { moods });
  });
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
