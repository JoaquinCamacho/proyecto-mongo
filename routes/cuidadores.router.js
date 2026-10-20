import express from "express"
import { obtenerCuidadores,obtenerCuidadoresPorId,registrarCuidador } from "../controllers/cuidadores.controller.js"

const router = express.Router()

router.post('/',registrarCuidador)
router.get('/',obtenerCuidadores)
router.get('/:id',obtenerCuidadoresPorId)

export default router