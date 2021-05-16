const express= require('express');
const router = express.Router();
const passport = require('passport');

// @desc    Auth with Google
// @route   GET /auth/google
router.get('/google',
passport.authenticate('google', { 
  scope:[  'profile' ] 
})
);

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get('/google/callback/',
passport.authenticate( 'google', {
  failureRedirect: 'http://localhost:3000/login'}),
  function(req, res) {
    res.redirect('http://localhost:3000/');
  });

module.exports = router;