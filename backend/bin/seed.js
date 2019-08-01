const mongoose = require("mongoose")
const Facturita = require('../models/Facturita')

const facturita = [{

        rfcEmisor: "XAXX010101000",
        nombreEmisor: "QUENNS",
        regimenFiscal: "612",
        rfcReceptor: "XAXX010101000LUCE730318P23",
        nombreReceptor: "EDUARDO CESAR LUPERCIO CASTILLO",
        usoCfdiReceptor: "G01",
        total: "24124.39",
        createdAt: "2019-08-01T07:14:54.307Z",
        updatedAt: "2019-08-01T07:14:54.307Z"
    },
    {

        rfcEmisor: "XAXX010101000",
        nombreEmisor: "SANBORNS",
        regimenFiscal: "612",
        rfcReceptor: "XAXX010101000LUCE730318P23",
        nombreReceptor: "EDUARDO CESAR LUPERCIO CASTILLO",
        usoCfdiReceptor: "G01",
        total: "234.45",
        createdAt: "2019-08-01T07:14:54.307Z",
        updatedAt: "2019-08-01T07:14:54.307Z"
    },
    {

        rfcEmisor: "XAXX010101000",
        nombreEmisor: "OXXO",
        regimenFiscal: "612",
        rfcReceptor: "XAXX010101000LUCE730318P23",
        nombreReceptor: "EDUARDO CESAR LUPERCIO CASTILLO",
        usoCfdiReceptor: "G01",
        total: "3456.3",
        createdAt: "2019-08-01T07:14:54.307Z",
        updatedAt: "2019-08-01T07:14:54.307Z"
    }
]


require("dotenv").config()
mongoose.connect(process.env.DB, { useNewUrlParser: true })
    .then(async() => {
        const results = await Facturita.create(facturita)
        console.log(`${results.length}, facturitas creadas`)
        mongoose.connection.close()
    })
    .catch(err => console.log(err))