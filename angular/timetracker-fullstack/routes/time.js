const express = require('express')
const controller = require('../controllers/time')
const passport = require('passport')
const router = express.Router()

router.get('/start', passport.authenticate('jwt', {session: false}), controller.start)
router.get('/end', passport.authenticate('jwt', {session: false}), controller.end)
router.get('/get', passport.authenticate('jwt', {session: false}), controller.get)

module.exports = router
