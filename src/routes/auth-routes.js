const express = require('express')
const passport = require('passport')
const router = express.Router()

router.get('/login', (req, res) => {
    console.log('LOGGING LOGIN')
    res.send('login')
})

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}))

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send(req.user)
})


router.get('/logout', (req, res) => {
    res.send('logout')
})

module.exports = router