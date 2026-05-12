import { addProduct,getProducts,getProductById, updateProductById, deleteProductById } from "../Controllers/productController.js";
import express from "express"

const router = express.Router()

router.post('/add' , addProduct)
router.get('/all' , getProducts)
router.get('/:id' , getProductById)
router.put('/:id' , updateProductById)
router.delete('/:id' , deleteProductById)

export default router
