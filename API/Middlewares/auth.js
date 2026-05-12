import jwt from "jsonwebtoken"
import { User } from "../Models/UserModel.js"

export const Authenticated = async (req,res,next) => {

    const token = req.header("Auth") // token hamara headers se aayega

    if (!token) {
        return res.json({
            message : "Login first",
            success : false
        })
    }

    const decoded = jwt.verify(token, "mysecret@123!");

    console.log(decoded) // so decoded mai user ki id hogi. why?? cuz jab hmne ye kiya hua hai : jwt.sign({userId:user._id} -- jaha hamne token banaya tha.

    const id = decoded.userId
    let user = await User.findById(id)        
    if (!user) {
        return res.json({
            message : "User not exists"
        })
    }

    // ab is user ko mujhe save krna hai
    req.user = user

    next()

    // ab jaha jaha userid chahiye, waha waha req.user krke user ki id nikaal skte or is id ko kahi bhi use kr skte
}