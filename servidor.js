import conectarDB from "./conexion.js"
import express from "express"
import authMiddleware from "./middlewares/auth.middleware.js"

import cuidadoresRouter from "./routes/cuidadores.router.js"


const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use((req, res, next) => {
    const inicio = Date.now()

    res.on('finish', () => {
        const duracion = Date.now() - inicio

        console.log(

            `${req.method} ${req.originalUrl} ${res.statusCode} - ${duracion} ms`

        )
    })

    next()
})


app.use("/api/cuidadores", cuidadoresRouter)

app.get('/api/salud',(req,res)=>{
    res.status(200).json({
        estado:'ok',
        mensaje:'Funciona API'
    })
})

app.use((req,res)=>{
    res.status(404).json({
        error:'No se encontro'
    })
})

app.use((error,req,res,next)=>{

    console.error(error)

    if(error.name === 'ValidationError'){
        return  res.status(422).json({
            error:'error de validacion'
        })
    }
    if(error.name === 'CastError'){
        return res.status(400).json({
            error:'id no valido'
        })
    }
    if(error.code === 11000){
        return res.status(409).json({
            error:'email existente'
        })
    }

    res.status(error.status || 500).json({
        error:error.message || 'Error del servidor'
    })

})

async function iniciarServidor() {
    try {
        await conectarDB()

        app.listen(PORT, () => {

            console.log(`Servidor escuchando en el puerto ${PORT}`)

        })
    } catch (error) {
        console.error(error)
    }
}

iniciarServidor()