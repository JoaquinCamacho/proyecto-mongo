import express from "express"
import { obtenerCuidadores,obtenerCuidadoresPorId,registrarCuidador,actualizarCuidadorController,eliminarCuidadorController } from "../controllers/cuidadores.controller.js"
import authMiddleware from "../middlewares/auth.middleware.js"

const router = express.Router()

router.post('/',authMiddleware,registrarCuidador)
router.get('/',obtenerCuidadores)
router.patch('/:id',actualizarCuidadorController)
router.delete('/:id',eliminarCuidadorController)
router.get('/:id',obtenerCuidadoresPorId)

export default router