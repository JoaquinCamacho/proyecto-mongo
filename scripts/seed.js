import conectarDB from '../conexion.js'
import Cuidador from '../models/cuidador.js'

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
    await Cuidador.insertMany(cuidadores)
    console.log('Seed cargado correctamente')
    process.exit(0)
}

cargarSeed().catch(error => console.log(error))