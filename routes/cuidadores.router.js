import express from "express"
import { obtenerCuidadores,obtenerCuidadoresPorId,registrarCuidador,actualizarCuidadorController,eliminarCuidadorController,ocuparCuidadorController } from "../controllers/cuidadores.controller.js"
import authMiddleware from "../middlewares/auth.middleware.js"
import adminMiddleware from "../middlewares/admin.middleware.js"

const router = express.Router()

router.post('/',authMiddleware,registrarCuidador)
router.get('/',obtenerCuidadores)
router.patch('/:id',authMiddleware,actualizarCuidadorController)
router.delete('/:id',authMiddleware,adminMiddleware,eliminarCuidadorController)
router.patch('/:id/ocupar',authMiddleware,ocuparCuidadorController)
router.get('/:id',obtenerCuidadoresPorId)

export default router