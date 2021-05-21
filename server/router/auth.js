const express= require('express');
const router = express.Router();
const passport = require('passport');
const CLIENT_HOME_PAGE_URL = 'http://localhost:3000';
const {ensureAuth} = require('../middleware/authenticate');

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
  failureRedirect: '/auth/login/failed'}),
  function(req, res) {
    res.redirect(CLIENT_HOME_PAGE_URL);
  });

// @desc    logout user
// @route   GET /auth/logout
router.get('/logout',(req,res)=>{
    req.logout() //*passport middleware
    req.session.destroy()
		res.clearCookie('connect.sid')
    res.redirect(`${CLIENT_HOME_PAGE_URL}/login`)
});


// @desc    loged in failed 
// @route   GET /auth/login/failed
router.get('/login/failed',(req,res)=>{
  res.status(401).json({
    success: false,
  })
});

router.get('/isauth',ensureAuth,(req,res)=>{
  // console.log("isauth called")
  user=req.user
  res.status(200).json({
    user
  })
})

router.get('/user',(req,res)=>{
  const user=1;
})


module.exports = router;