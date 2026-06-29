import express from 'express'
const router = express.Router()

import {SchedulePage, TicketPage} from '../controllers/MovieAppController.js'

router.get('/schedule', SchedulePage)
router.get('/tickets', TicketPage)


export default router