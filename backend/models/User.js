const { model, Schema } = require('mongoose')
const PLM = require('passport-local-mongoose')


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    aPaterno: {
        type: String,
        required: true
    },
    aMaterno: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rfc: {
        type: String,
        required: true
    },
    ciec: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: "/img/user.png",
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

userSchema.plugin(PLM, { usernameField: 'email' })

module.exports = model('User', userSchema)