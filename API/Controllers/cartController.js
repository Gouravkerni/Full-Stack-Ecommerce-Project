import { Cart } from "../Models/CartModel.js";


// add to cart. 
// same product id ke liye new cart item add nahi hoga balki qty and price increase hoga.
export const addToCart = async (req,res) => {
    const {productId,title,price,qty,imgSrc} = req.body

    const userId = req.user;

    
    // finding user specfic cart 
    let cart = await Cart.findOne({userId})

    if (!cart) { // agr cart nahi h to cart bana lo naya
        cart = new Cart({userId,items:[]})
    }
    // pr agr already cart hai to us case mai jo product id aaya hai uske index ko find krna hai and uski qty ko increase kr dena hai.
    // same product id se agr do baar add to cart hora hai, to new product add na ho cart mai, balki us product is quantity increase ho jaye.
    // agr item dobara add hone ko aaya to index find karo pehle
    const itemIndex = cart.items.findIndex((item) => item.productId.toString() === productId)
    // findIndex js ka method : agr koi item already present hai to uska index nikaal ke de dega and agr nahi hai to -1 krke de dega, or uske andr callback diya hai which is similar to loop, loop kr ke nikaal diya

    // case jab item mil gaya, to qty and price badha do
    if (itemIndex > -1) {
        cart.items[itemIndex].qty += qty;
        cart.items[itemIndex].price += price*qty
    }
    else{ // case kab item nahi mila, to naye item ko array mai daal do
        cart.items.push({productId,title,price,qty,imgSrc});
    }

    await cart.save();
    res.json({
        message : "Item added to cart",
        cart,
        success : true
    })
}

// creating user specific cart
export const userCart = async (req,res) => {

    const userId = req.user;
    let cart = await Cart.findOne({userId})

    if (!cart) {
        return res.json({
            message : "Cart not found, please check id",
            success : false
        })
    }
    else{
        res.json({
            message : "User cart",
            cart,
            success : true
        })
    }
}

// remove product from cart
export const removeProductFromCart = async (req,res) => {

    const productId = req.params.productId
    const userId = req.user;
    let cart = await Cart.findOne({userId})

    if (!cart) {
        return res.json({
            message : "Cart not found, please check id",
            success : false
        })
    }

    cart.items = cart.items.filter((item) => item.productId.toString() !== productId)
    await cart.save()

    res.json({
        message : "Product removed from cart",
        success : true
    })
}

// clear cart : code copied from delete cart
export const clearCart = async (req,res) => {

    const userId = req.user;
    let cart = await Cart.findOne({userId})

    if (!cart) {
        cart = new Cart({items:[]})
    }
    else{
        cart.items = [] // tumne bas array ko empty kr diya cart ke.
    }

    await cart.save()

    res.json({
        message : "Cart cleared",
        success : true
    })
}

// decrease quantity from cart : code copied from add to cart. qty decrease hogi to price bhi decrease hoga.
export const decreaseProductQty = async (req,res) => {
    const {productId,qty} = req.body

    const userId = req.user;

    
    let cart = await Cart.findOne({userId})

    if (!cart) { 
        cart = new Cart({userId,items:[]})
    }
    
    const itemIndex = cart.items.findIndex((item) => item.productId.toString() === productId)
    
    if (itemIndex > -1) {

        const item = cart.items[itemIndex]
        if (item.qty > qty) {
            const pricePerUnit = item.price/item.qty

            item.qty -= qty
            item.price -= pricePerUnit * qty
        }
        else{
            cart.items.splice(itemIndex , 1)
        }
    }
    else{ 
        return res.json({
            message : "Invalid product id"
        })
    }

    await cart.save();
    res.json({
        message : "Item quantity decreased",
        cart,
        success : true
    })
}