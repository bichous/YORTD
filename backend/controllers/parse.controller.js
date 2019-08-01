const xmlToJson = require('xml-to-json-stream')
const parser = xmlToJson({ attributeMode: true })
const axios = require('axios')
const Facturita = require('../models/Facturita')
const mongoose = require('mongoose')

exports.parseFacturas = async(req, res, next) => {
    const urlDelArchivoEnCloudinary =
        'https://res.cloudinary.com/duxtsrbpu/raw/upload/v1564642924/YORTD/76F484C3-3FA6-4137-BAF6-2B246C307433_qw65hz.xml'
    const factura = await axios
        .get(`http://www.ddginc-usa.com/cgi-bin/url-to-json.php?url=${urlDelArchivoEnCloudinary}`)
        .then(({ data }) => {
            parser.xmlToJson(
                `${data.html[0]}
    ${data.html[1]}
  `,
                (err, json) => {
                    if (err) {
                        console.log(err)
                    } else {
                        const nuevaFactura = []
                        const emisor = json['cfdi:Comprobante']
                        const emisor2 = emisor['cfdi:Emisor']

                        const receptor = json['cfdi:Comprobante']
                        const receptor2 = receptor['cfdi:Receptor']

                        const total = json['cfdi:Comprobante'].Total



                        return Facturita.create({

                                rfcEmisor: emisor2.Rfc,
                                nombreEmisor: emisor2.Nombre,
                                regimenFiscal: emisor2.RegimenFiscal,
                                rfcReceptor: receptor2.Rfc,
                                nombreReceptor: receptor2.Nombre,
                                usoCfdiReceptor: receptor2.UsoCFDI,
                                total: total

                            })
                            .then(facturita => {
                                res.status(201).json({ facturita })

                            })
                            .catch(err => {
                                console.log(err)
                            })

                    }
                }
            )
        })
        .catch(err => console.log(err))
}