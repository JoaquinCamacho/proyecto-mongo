import { listarCuidadores,cuidadorPorId,crearCuidador } from "../services/cuidadores.services.js";

async function obtenerCuidadores(req,res,next){

        try{
            const cuidadores = await listarCuidadores()


            res.status(200).json({
                estado:'ok',
                cuidadores
            })
        }catch(error){
            next(error)
        }
}

async function obtenerCuidadoresPorId(req,res,next){

    try{
        const id = req.params.id
        const cuidador = await cuidadorPorId(id)

        if(!cuidador){

        return  res.status(404).json({
                error:'Cuidador no encontrado'
            })

        }

        res.status(200).json({
            estado:'ok',
            cuidador
        })

    }catch(error){
        next(error)
    }
}

async function registrarCuidador(req,res,next){

    try{
        const datos=req.body
        
        const cuidadorCreado = await crearCuidador(datos)

        res.location(`/api/cuidadores/${cuidadorCreado.id}`)

        res.status(201).json({
            cuidadorCreado
        })
    }catch(error){
        next(error)
    }

}

export {obtenerCuidadores,obtenerCuidadoresPorId,registrarCuidador}