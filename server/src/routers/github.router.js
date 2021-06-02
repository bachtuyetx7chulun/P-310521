import { Router } from 'express'
import {
    getReps,
    getDetailRep,
    getUser
} from '../controllers/github.controller.js'

const router = Router()

router.get('/', getReps)
router.get('/user', getUser)
router.get('/:repository', getDetailRep)

export default router
