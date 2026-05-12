import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Products",
        require : true
    },
    title : {type : String, require : true},
    price : {type : Number, require : true},
    qty : {type : Number, require : true},
    imgSrc : {type : String, require : true},
});


const cartSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        require : true
    },
    items : [cartItemSchema]
});

export const Cart = mongoose.model("Cart" , cartSchema)

/*
    ek user hoga, us user ki id hogi, or us user ke pass kaafi saare cart items honge. -> cartSchema
    us cart item mai products honge, un product ki kuch id hogi, title price etc honge -> cartItemSchema
*/