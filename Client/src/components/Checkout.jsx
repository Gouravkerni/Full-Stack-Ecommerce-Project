import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import TableProducts from "./TableProducts";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, userAddress, url, user, clearCart } = useContext(AppContext);
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let qty = 0;
    let price = 0;
    if (cart?.items) {
      for (let i = 0; i < cart.items?.length; i++) {
        qty += cart.items[i].qty;
        price += cart.items[i].price;
      }
    }
    setPrice(price);
    setQty(qty);
  }, [cart]);

  console.log("My cart", cart);
  console.log("User address", userAddress);

  const handlePayment = async () => {
    try {
      const orderResponse = await axios.post(`${url}/payment/checkout`, {
        amount: price,
        qty: qty,
        cartItems: cart?.items,
        userShipping: userAddress,
        userId: user._id,
      });

      console.log("order response", orderResponse);

      const { orderId, amount: orderAmount } = orderResponse.data;

      var options = {
        key: "rzp_test_RyckkYp3eziaXg",
        amount: orderAmount * 100,
        currency: "INR",
        name: "My Ecom",
        description: "Ecom store",
        order_id: orderId,
        handler: async function (response) {
          const paymentData = {
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            signature: response.razorpay_signature,
            amount: orderAmount,
            orderItems: cart?.items,
            userId: user._id,
            userShipping: userAddress,
          };

          const api = await axios.post(
            `${url}/payment/verify-payment`,
            paymentData
          );

          if (api.data.success) {
            clearCart();
            navigate("/orderconfirmation");
          }
        },
        prefill: {
          name: "Lalit Kumar",
          email: "Lalit.kumar@gmail.com",
          contact: "+91 790X67XXXX",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-medium mb-12">Order summary</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT — PRODUCTS */}
          <div className="bg-white border border-border-soft rounded-2xl p-8">
            <h2 className="text-lg font-medium mb-6">Your items</h2>

            {/* Existing component — untouched */}
            <TableProducts cart={cart} />
          </div>

          {/* RIGHT — ADDRESS */}
          <div className="bg-white border border-border-soft rounded-2xl p-8">
            <h2 className="text-lg font-medium mb-6">Shipping address</h2>

            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-text-muted">Name:</span>{" "}
                {userAddress?.fullName}
              </li>
              <li>
                <span className="text-text-muted">Phone:</span>{" "}
                {userAddress?.phoneNumber}
              </li>
              <li>
                <span className="text-text-muted">Country:</span>{" "}
                {userAddress?.country}
              </li>
              <li>
                <span className="text-text-muted">State:</span>{" "}
                {userAddress?.state}
              </li>
              <li>
                <span className="text-text-muted">City:</span>{" "}
                {userAddress?.city}
              </li>
              <li>
                <span className="text-text-muted">Pincode:</span>{" "}
                {userAddress?.pincode}
              </li>
              <li>
                <span className="text-text-muted">Address:</span>{" "}
                {userAddress?.address}
              </li>
            </ul>
          </div>
        </div>

        {/* PAY BUTTON */}
        <div className="text-center mt-16">
          <button
            onClick={handlePayment}
            className="bg-accent hover:bg-accent-hover text-white px-14 py-4 rounded-full text-sm font-medium transition"
          >
            Proceed to payment
          </button>

          <p className="text-xs text-text-muted mt-4">
            Secure payment powered by Razorpay
          </p>
        </div>
      </section>
    </>
  );
};

export default Checkout;
