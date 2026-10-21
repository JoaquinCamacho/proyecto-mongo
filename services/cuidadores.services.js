import Cuidador from "../models/cuidador.js";


async function listarCuidadores(filtros){

    const consulta ={}

    if(filtros.zona){
        consulta.zona = filtros.zona
    }
    if(filtros.especialidad){
        consulta.especialidad = filtros.especialidad
    }
    if(filtros.disponible !== undefined){
        consulta.disponible = filtros.disponible === "true"
    }

    const cuidadores = await Cuidador.find(consulta)
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