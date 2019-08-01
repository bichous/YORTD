const Facturita = require('../models/Facturita')
const User = require('../models/User')

exports.getFacturitasEmitidas = (req, res, next) => {
    Facturita.find({ rfcEmisor: { $eq: 'LUCE730318P23' } })

    .then(facturita => {
            res.status(201).json({ facturita })
        })
        .catch(err => console.log(err))
}

exports.getFacturitasRecibidas = (req, res, next) => {
    Facturita.find({ rfcReceptor: { $eq: 'LUCE730318P23' } })

    .then(facturita2 => {
            res.status(201).json({ facturita2 })
        })
        .catch(err => console.log(err))
}