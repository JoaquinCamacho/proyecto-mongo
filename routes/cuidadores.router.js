import express from "express"
import { obtenerCuidadores,obtenerCuidadoresPorId } from "../controllers/cuidadores.controller.js"

const router = express.Router()

router.get('/',obtenerCuidadores)
router.get('/:id',obtenerCuidadoresPorId)

export default router