const Facturita = require('../models/Facturita')
const User = require('../models/User')

exports.getFacturas = (req, res, next) => {
    Facturita.find()
        .populate('userID')
        .then(facturita => res.status(201).json(facturita))
        .catch(err => console.log(err))
}