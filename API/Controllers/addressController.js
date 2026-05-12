import { Address } from "../Models/AddressModel.js";

export const addAddress = async (req, res) => {
  let { fullName, address, city, state, country, pincode, phoneNumber } = req.body;

  let userAddress = await Address.create({userId:req.user, fullName, address, city, state, country, pincode, phoneNumber })
  res.json({
    message : "Address added",
    userAddress,
    success : true
  })
};

// agr multiple address h ek user ke to 1st address nikaal ra mai
export const getAddress = async (req,res) => {
    let address = await Address.find({userId:req.user}).sort({createdAt:-1})
    res.json({
        message : "Address",
        userAddress : address[0] // first address daal diya maine userAddress ke andr
    })
}