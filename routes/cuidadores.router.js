import express from "express"
import { obtenerCuidadores,obtenerCuidadoresPorId,registrarCuidador,actualizarCuidadorController,eliminarCuidadorController } from "../controllers/cuidadores.controller.js"

const router = express.Router()

router.post('/',registrarCuidador)
router.get('/',obtenerCuidadores)
router.patch('/:id',actualizarCuidadorController)
router.delete('/:id',eliminarCuidadorController)
router.get('/:id',obtenerCuidadoresPorId)

export default router