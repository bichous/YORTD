const router = require('express').Router();
const { signup, login, logout, profile, updateUser } = require('../controllers/auth.controller')
const { upload } = require('../controllers/upload.controller')
const uploadCloud = require('../config/cloudinary')
const { getFacturas } = require('../controllers/parse.controller')
const passport = require('../config/passport')
const { verifyToken } = require('../config/jwt')


router.post('/signup', signup)

router.post('/login', passport.authenticate('local'), login)

router.get('/logout', logout)

router.get('/profile', verifyToken, profile)

router.patch('/profile/edit/:id', updateUser)

router.post('/upload', uploadCloud.array('facturas', 100), upload)


module.exports = router;