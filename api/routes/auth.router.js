import { Router } from "express";
import { login,registrar,obtenerPerfil } from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js"
const router = Router()

router.post('/login',login)
router.post('/registro', registrar)
router.get('/perfil', authMiddleware, obtenerPerfil)

export default router