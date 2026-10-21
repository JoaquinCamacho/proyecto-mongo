import express from "express"
import { obtenerCuidadores,obtenerCuidadoresPorId,registrarCuidador,actualizarCuidadorController } from "../controllers/cuidadores.controller.js"

const router = express.Router()

router.post('/',registrarCuidador)
router.get('/',obtenerCuidadores)
router.patch('/:id',actualizarCuidadorController)
router.get('/:id',obtenerCuidadoresPorId)

export default router