import { Router } from "express";
import { login,registrar } from "../controllers/auth.controller.js";

const router = Router()

router.post('/login',login)
router.post('/registro', registrar)

export default router