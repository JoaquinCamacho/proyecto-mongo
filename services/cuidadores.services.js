import Cuidador from "../models/cuidador.js";


async function listarCuidadores(){

    const cuidadores = await Cuidador.find()
    return cuidadores

}

async function cuidadorPorId(id){
    const cuidador = await Cuidador.findById(id)
    return cuidador
}

async function crearCuidador(){

    
}

export {listarCuidadores,cuidadorPorId}