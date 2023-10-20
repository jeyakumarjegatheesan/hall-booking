import express from 'express'
import { createCutomerDetails, getBookedDetails, getCustomerBookedHistory, getCustomerDetails, getRoomDetails } from '../Controllers/room.controller.js';
const router=express.Router()


router.get('/rooms',getRoomDetails)
router.get('/roomData',getBookedDetails)
router.post('/booked-details',createCutomerDetails)
router.get('/customerData',getCustomerDetails)
router.get('/customerHistory',getCustomerBookedHistory)




export default router;