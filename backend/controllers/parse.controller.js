const xmlToJson = require('xml-to-json-stream')
const parser = xmlToJson({ attributeMode: true })
const axios = require('axios')

exports.getFacturas = (req, res, next) => {
    const urlDelArchivoEnCloudinary = 'https://res.cloudinary.com/duxtsrbpu/raw/upload/v1564500185/YORTD/0F0722DD-93F0-457C-90B6-BB20146C8C61_kxfhfk.xml'
    axios
        .get(`http://www.ddginc-usa.com/cgi-bin/url-to-json.php?url=${urlDelArchivoEnCloudinary}`)
        .then(({ data }) => {
            parser.xmlToJson(`${data.html[0]} ${data.html[1]}`,
                (err, json) => {
                    if (err) {
                        console.log(err)
                    }
                    res.send(json['cfdi:Comprobante'])
                }
            )
        })
        .catch(err => console.log(err))
}