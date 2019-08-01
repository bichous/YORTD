const { model, Schema } = require('mongoose')

const facturitaSchema = new Schema({


    rfcEmisor: {
        type: String,
    },
    nombreEmisor: {
        type: String,
    },
    regimenFiscal: {
        type: String
    },

    rfcReceptor: {
        type: String,
    },
    nombreReceptor: {
        type: String,
    },
    usoCfdiReceptor: {
        type: String
    },
    total: String,

    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }


}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Facturita', facturitaSchema)