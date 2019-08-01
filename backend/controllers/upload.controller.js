const Facturas = require('../models/Facturita')

exports.upload = (req, res, next) => {
    res.status(201).json({ files: req.files })

}