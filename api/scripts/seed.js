import conectarDB from '../conexion.js'
import Cuidador from '../models/cuidador.js'
import Usuario from '../models/usuario.js'
import {randomBytes, scrypt} from 'node:crypto'
import { promisify } from 'node:util'

const scryptAsync = promisify(scrypt)

async function generarCredenciales(password) {
    const salt = randomBytes(16).toString('hex')
    const hash = await scryptAsync(password, salt, 64)

    return {
        salt,
        passwordHash: hash.toString('hex')
    }
}


const cuidadores = [
    {
        nombre: 'Ana Perez',
        email: 'ana.prueba@example.com',
        zona: 'Quilmes',
        especialidad: 'mandados',
        disponible: true,
        edad: 30,
        tarifaPorHora: 5000
    },
    {
        nombre: 'Carlos Gomez',
        email: 'carlos.prueba@example.com',
        zona: 'Quilmes',
        especialidad: 'cuidados',
        disponible: false,
        edad: 45,
        tarifaPorHora: 6500
    },
    {
        nombre: 'Lucia Fernandez',
        email: 'lucia.prueba@example.com',
        zona: 'Bernal',
        especialidad: 'compania',
        disponible: true,
        edad: 27,
        tarifaPorHora: 4500
    },
    {
        nombre: 'Martin Lopez',
        email: 'martin.prueba@example.com',
        zona: 'Bernal',
        especialidad: 'mandados',
        disponible: false,
        edad: 38,
        tarifaPorHora: 5500
    },
    {
        nombre: 'Sofia Torres',
        email: 'sofia.prueba@example.com',
        zona: 'Avellaneda',
        especialidad: 'cuidados',
        disponible: true,
        edad: 52,
        tarifaPorHora: 7000
    }
]

async function cargarSeed() {
    await conectarDB()


    let admin = await Usuario.findOne({ email: 'admin@example.com' })

if (!admin) {
    const credenciales = await generarCredenciales('Admin123')

    admin = await Usuario.create({
        nombre: 'Administrador',
        email: 'admin@example.com',
        ...credenciales,
        rol: 'admin'
    })
}

let usuario = await Usuario.findOne({ email: 'usuario@example.com' })

if (!usuario) {
    const credenciales = await generarCredenciales('Usuario123')

    usuario = await Usuario.create({
        nombre: 'Usuario comun',
        email: 'usuario@example.com',
        ...credenciales,
        rol: 'usuario'
    })
}
    
    for (const cuidador of cuidadores) {
    await Cuidador.findOneAndUpdate(
        { email: cuidador.email },
        { ...cuidador, usuario: usuario._id },
        { new: true, upsert: true, runValidators: true }
    )
}
    console.log('Seed cargado correctamente')
    process.exit(0)
}

cargarSeed().catch(error => console.log(error))