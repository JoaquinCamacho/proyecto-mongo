
import mongoose from "mongoose"

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    salt:{
        type: String,
        required: true
    },
    rol: {
        type: String,
        enum: ['usuario', 'admin'],
        default: 'usuario'
    }
}, {
    timestamps: true,
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
            delete ret.passwordHash
            delete ret.salt
            return ret
        }
    }
})

const Usuario = mongoose.model('Usuario', usuarioSchema)

export default Usuario
