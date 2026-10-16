import mongoose from "mongoose"

const cuidadoreSchema = new mongoose.Schema({
    nombre: String,
    zona: String,
    especialidad: String,
    disponible: Boolean,
    edad: Number,
})

const Cuidador = mongoose.model('Cuidador', cuidadoreSchema)

export default Cuidador;