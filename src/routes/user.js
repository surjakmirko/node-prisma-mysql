import { Router } from "express";
import findAll from '../controlador/user.js'

const router = Router()

router.get("/",findAll)


export default router