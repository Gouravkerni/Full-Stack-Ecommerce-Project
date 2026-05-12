import express from "express"
import { addAddress, getAddress } from "../Controllers/addressController.js"
import { Authenticated } from "../Middlewares/auth.js"

const router = express.Router()

router.post('/add' ,Authenticated, addAddress)
router.get('/get' ,Authenticated, getAddress)

export default router