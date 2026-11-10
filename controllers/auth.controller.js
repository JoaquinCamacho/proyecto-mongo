import Usuario from "../models/usuario.js";
import {scrypt} from "node:crypto";
import { promisify } from "node:util";
import jwt from 'jsonwebtoken'

const asyncScrypt = promisify(scrypt)

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

export { login }