const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const User = require('../models/User');
const dotenv=require('dotenv');
dotenv.config();

module.exports = function (passport){
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
      
      },
    async (accessToken, refreshToken, profile, done)=>{
        const newUser = {
          googleId: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          image: profile.picture
        }
        try {
          let user = await User.findOne({googleId: profile.id})
            if(user){
              done(null,user)
            }else{
              user = await User.create(newUser);
              done(null,user)
            }
        } catch(err){
          console.log(err);
        }
    }
    

    ));

    passport.serializeUser(function(user, done) {
        console.log('=== serialize called ===')
	    console.log(user) 
	    console.log('---------')
        done(null, user.id);
      });
      
    passport.deserializeUser(function(id, done) {
        console.log('=== deserialize called ===')
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });
}