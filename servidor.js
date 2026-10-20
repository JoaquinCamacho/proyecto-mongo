import conectarDB from "./conexion.js"
import express from "express"

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

    console.error()

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