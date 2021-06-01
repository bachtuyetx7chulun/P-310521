import { Router } from 'express'
import { getReps, getDetailRep } from '../controllers/github.controller.js'

const router = Router()
router.get('/', getReps)
router.get('/:repository', getDetailRep)

export default router
