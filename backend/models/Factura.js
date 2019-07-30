const { model, Schema } = require('mongoose')

const facturaSchema = new Schema({

    Comprobante: {
        Emisor: {
            Rfc: {
                type: String,
                required: true,
            },
            Nombre: {
                type: String,
                required: true,
            },
            RegimenFiscal: {
                type: String,
                required: true,
            }

        },
        Receptor: {
            Rfc: {
                type: String,
                required: true,
            },
            Nombre: {
                type: String,
                required: true,
            },
            UsoCFDI: {
                type: String,
                required: true,
            }
        },
        Impuestos: {
            Traslados: {
                Traslado: {
                    Impuesto: {
                        type: String,
                        required: true,
                    },
                    TipoFactor: {
                        type: String,
                        required: true,
                    },
                    TasaOCuota: {
                        type: String,
                        required: true,
                    },
                    Importe: {
                        type: String,
                        required: true,
                    }
                }
            }
        },
        _SubTotal: {
            type: String,
            required: true,
        },
        _Moneda: {
            type: String,
            required: true,
        },
        _Total: {
            type: String,
            required: true,
        },

        userID: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }

})