const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./keys')
const User = require('../')

passport.use(
    new GoogleStrategy({
        callbackUrl: '/auth/google/redirect',
        clientId: keys.appId,
        clientSecret: keys.appSecret,
    }, (accessToken, refreshToken, profile, done) => {
        //passport callback
    }))


