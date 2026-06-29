import express from 'express'
const router = express.Router()

import {SchedulePage} from '../controllers/MovieAppController.js'

router.get('/schedule', SchedulePage)


export default router