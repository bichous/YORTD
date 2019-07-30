const User = require('../models/User')
const { signToken, verifyToken } = require('../config/jwt')


exports.signup = (req, res, next) => {
    User.register({...req.body }, req.body.password)
        .then(user => res.status(201).json({ user }))
        .catch(err => res.status(500).json({ err }))
}


exports.login = (req, res, next) => {
    const [header, payload, signature] = signToken(req.user)
    res.cookie('headload', `${header}.${payload}.`, {
        // maxAge: 1000 * 60 * 60 * 6,
        // secure: true
    })
    res.cookie('signature', signature, {
        // httpOnly: true,
        // secure: true
    })
    res.status(200).json({ user: req.user })
}

exports.logout = (req, res, next) => {
    res.clearCookie('headload')
    res.clearCookie('signature')
    res.status(200).json({ msg: 'No me quiero ir Sr Stark' })
}

exports.profile = (req, res, next) => {
    User.findById(req.user._id, { hash: 0, salt: 0 })
        .then(user => res.status(200).json({ user }))
        .catch(err => res.status(401).json({ err }))
}

exports.updateUser = (req, res, next) => {
    const { id } = req.params
    console.log(id)
    User.findByIdAndUpdate(id, {...req.body }, { new: true })
        .then(user => res.status(200).json({ user }))
        .catch(err => res.status(500).json({ err }))
}