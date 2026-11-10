import Usuario from "../models/usuario.js";
import {scrypt,randomBytes} from "node:crypto";
import { promisify } from "node:util";
import jwt from 'jsonwebtoken'

const asyncScrypt = promisify(scrypt)

async function generarCredenciales(password) {
    const salt = randomBytes(16).toString('hex')

    const hash = await asyncScrypt(password, salt, 64)

    return {
        salt,
        passwordHash: hash.toString('hex')
    }
}

async function registrar(req, res) {

    const {nombre, email, password} = req.body

    const usuarioExistente = await Usuario.findOne({email})

    if (usuarioExistente) {
        return res.status(409).json({
        error: 'El email ya está registrado'
    })
}

    const credenciales = await generarCredenciales(password)

    const nuevoUsuario = await Usuario.create({
    nombre,
    email,
    ...credenciales,
    rol: 'usuario'
})
    return res.status(201).json({
        mensaje: 'Usuario registrado correctamente',
        usuario: nuevoUsuario
    })

}


async function login(req, res) {


    const {email, password} = req.body

    const usuario = await Usuario.findOne({email})

    if(!usuario){
        return res.status(401).json({
            error:'Credenciales incorrectas'
        })
    }

    const hash = await asyncScrypt(password, usuario.salt, 64)

    const hashGuardado = Buffer.from(usuario.passwordHash, 'hex')

    if(!hashGuardado.equals(hash)){
        return res.status(401).json({
            error:'Credenciales incorrectas'
        })
    }

    const token = jwt.sign(
        {id:usuario._id, rol: usuario.rol},
        process.env.JWT_SECRET,
        {expiresIn:'1h'}
    )

    return res.json({
        mensaje: 'Login exitoso',
        token
    })

}

export { login,registrar }