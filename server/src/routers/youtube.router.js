import { Router } from 'express'
import { getAll, getPart } from '../controllers/youtube.controller.js'

const router = Router()
router.get('/', getAll)
router.get('/:part', getPart)

export default router
