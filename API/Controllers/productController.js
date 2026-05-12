import { Products } from "../Models/ProductModel.js";

export const addProduct = async (req,res) => {
    const {title,decription,price,category,qty,imgSrc} = req.body
    try {
        
        let product = await Products.create({title,decription,price,category,qty,imgSrc})
        if (product) {
            return res.json({
                message : "Product created successfully..",
                product,
                success : true
            })
        }
        else{
            return res.json({
                message : "Failed to create product",
                success : false
            })
        }

    } catch (error) {
        res.json({
            message : error.message
        })
    }
}

export const getProducts = async (req,res) => {
    try {
        
        let product = await Products.find().sort({createdAt:-1})
        if (product) {
            return res.json({
                message : "All product fetched successfully",
                product,
                success : true
            })
        }
        else{
            return res.json({
                message : "Failed to fetch product",
                success : false
            })
        }

    } catch (error) {
        res.json({
            message : error.message
        })
    }
}

export const getProductById = async (req,res) => {
    const id = req.params.id

    try {

        let product = await Products.findById(id)
        if (product) {
            return res.json({
                message : "Product fetched successfully",
                product,
                success : true
            })
        }
        else{
            return res.json({
                message : "Failed to fetch product",
                success : false
            })
        }
        
    } catch (error) {
        res.json({
            message : error.message
        })
    }
}

export const updateProductById = async (req,res) => {
    const id = req.params.id
    const {title,decription,price,category,qty,imgSrc} = req.body

    try {

        let product = await Products.findByIdAndUpdate(id, {title,decription,price,category,qty,imgSrc}, {new:true})
        if (product) {
            return res.json({
                message : "Product Updated successfully",
                product,
                success : true
            })
        }
        else{
            return res.json({
                message : "Failed to update product",
                success : false
            })
        }
        
    } catch (error) {
        res.json({
            message : error.message
        })
    }
}

export const deleteProductById = async (req,res) => {
    const id = req.params.id

    try {

        let product = await Products.findByIdAndDelete(id)
        if (product) {
            return res.json({
                message : "Product Deleted successfully",
                success : true
            })
        }
        else{
            return res.json({
                message : "Failed to delete product",
                success : false
            })
        }
        
    } catch (error) {
        res.json({
            message : error.message
        })
    }
}