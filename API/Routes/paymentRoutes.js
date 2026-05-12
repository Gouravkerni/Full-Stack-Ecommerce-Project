import express from "express"
import {allOrders, checkout, userOrder, verify} from "../Controllers/paymentController.js"
import {Authenticated} from "../Middlewares/auth.js"

const router = express.Router();

// checkout
router.post("/checkout" , checkout)

// verfiy payment and save to db
router.post("/verify-payment" , verify)

// user order confirmation
router.get("/userorder" ,Authenticated ,userOrder)

// all order
router.get("/orders" , allOrders)

export default router