import { User } from "../Models/UserModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export const register = async (req,res )=>{
    const {name,email,password} = req.body
    
    try {

        if (!name || !email || !password) {
            return res.json({
                message : "All fields are required",
                success : false
            })
        }

        let user = await User.findOne({email})
        if(!user){
            const hashPassword = await bcrypt.hash(password,10)
            user = await User.create({name,email,password:hashPassword})
            return res.json({
                message : "User registred successfully..",
                user,
                success : true
            })
        }
        else{
            return res.json({
                message : "User already exists with this gmail..",
                success :false
            })
        }
        
        
    } catch (error) {
        res.json({
            message : error.message
        })
    }
}

export const login = async (req,res) => {
    const {email,password} = req.body

    try {
        let user = await User.findOne({email})
        if (!user) {
            return res.json({
                message : "No user exists with this gmail..",
                success : false
            })
        }

        const validatePassword = await bcrypt.compare(password, user.password)
        if (!validatePassword) {
            return res.json({
                message : "Invalid password",
                success :false
            })
        }

        const token = jwt.sign({userId:user._id}, "mysecret@123!", {expiresIn:'7d'})

        res.json({
            message : `Welcome ${user.name}`,
            token,
            success : true,
        })

    } catch (error) {
        res.json({
            message : error.message
        })
    }
}

export const users = async (req,res) => {

    try {

        const user = await User.find().sort({createdAt:-1})
        if (!user) {
            return res.json({
                message : "No user found",
                success : false
            });
        }
        else{
            return res.json({
                message : "All user fetched successfully",
                user,
                success : true
            });
        }
        
    } catch (error) {
        res.json({
            message : error.message
        })
    }

}

export const profile = async (req,res) => {
    res.json({
        user:req.user
    })
}