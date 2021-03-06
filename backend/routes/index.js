const router = require('express').Router();
const { signup, login, logout, profile, updateUser } = require('../controllers/auth.controller')
const { upload } = require('../controllers/upload.controller')
const uploadCloud = require('../config/cloudinary')
const { parseFacturas } = require('../controllers/parse.controller')
const { getFacturas } = require('../controllers/get.controller')
const { getFacturitasEmitidas, getFacturitasRecibidas } = require('../controllers/calculo.controller')
const passport = require('../config/passport')
const { verifyToken } = require('../config/jwt')


router.post('/signup', signup)

router.post('/login', passport.authenticate('local'), login)

router.get('/logout', logout)

router.get('/profile', verifyToken, profile)

router.patch('/profile/edit/:id', updateUser)

router.post('/upload', uploadCloud.array('facturas', 100), upload)

router.post('/calculo', parseFacturas)

router.get('/calculo', getFacturas)

router.get('/facturitasemitidas', getFacturitasEmitidas)

router.get('/facturitasrecibidas', getFacturitasRecibidas)



module.exports = router;