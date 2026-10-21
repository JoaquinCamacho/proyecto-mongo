import Cuidador from "../models/cuidador.js";


async function listarCuidadores(){

    const cuidadores = await Cuidador.find()
    return cuidadores

}

async function cuidadorPorId(id){
    const cuidador = await Cuidador.findById(id)
    return cuidador
}

async function crearCuidador(datos){

    const cuidador = await Cuidador.create(datos)
    return cuidador

}

async function actualizarCuidador(id,datos){
    const cuidador = await Cuidador.findByIdAndUpdate(id,datos, {new:true,runValidators:true})
    return cuidador
}

async function eliminarCuidador(id){
    const cuidador = await Cuidador.findByIdAndDelete(id)
    return cuidador
}

export {listarCuidadores,cuidadorPorId,crearCuidador,actualizarCuidador,eliminarCuidador}