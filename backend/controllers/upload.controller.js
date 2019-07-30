const Facturas = require('../models/Factura')

exports.upload = (req, res, next) => {
    res.status(201).json({ files: req.files })

}