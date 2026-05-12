import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import ShowOrderProduct from "./ShowOrderProduct";
import { FiCheckCircle } from "react-icons/fi"
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";


const OrderConfirmation = () => {
  const { userOrder } = useContext(AppContext);
  const [latestOrder, setLatestOrder] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (userOrder) {
      setLatestOrder(userOrder[0]);
    }
  }, [userOrder]);

  console.log("Latest order", latestOrder);

  return (
    <>
  <section className="max-w-6xl mx-auto px-6 py-20">
    
    {/* SUCCESS HEADER */}
    <div className="text-center mb-16">
      <FiCheckCircle className="mx-auto text-accent" size={56} />
      <h1 className="text-3xl font-medium mt-6 mb-2">
        Order confirmed
      </h1>
      <p className="text-text-muted">
        Thank you for your purchase. Your order will be delivered soon.
      </p>
    </div>

    {/* CONTENT */}
    <div className="grid md:grid-cols-2 gap-10">
      
      {/* LEFT — ORDER ITEMS */}
      <div className="bg-white border border-border-soft rounded-2xl p-8">
        <h2 className="text-lg font-medium mb-6">
          Order items
        </h2>

        <ShowOrderProduct items={latestOrder?.orderItems} />
      </div>

      {/* RIGHT — ORDER & SHIPPING */}
      <div className="bg-white border border-border-soft rounded-2xl p-8">
        <h2 className="text-lg font-medium mb-6">
          Order details
        </h2>

        <ul className="space-y-3 text-sm">
          <li>
            <span className="text-text-muted">Order ID:</span>{" "}
            {latestOrder?.orderId}
          </li>
          <li>
            <span className="text-text-muted">Payment ID:</span>{" "}
            {latestOrder?.paymentId}
          </li>
          <li>
            <span className="text-text-muted">Payment status:</span>{" "}
            {latestOrder?.payStatus}
          </li>
        </ul>

        <hr className="my-6 border-border-soft" />

        <h3 className="text-sm font-medium mb-4">
          Shipping address
        </h3>

        <ul className="space-y-2 text-sm text-text-muted">
          <li>{latestOrder?.userShipping?.fullName}</li>
          <li>{latestOrder?.userShipping?.phoneNumber}</li>
          <li>
            {latestOrder?.userShipping?.city},{" "}
            {latestOrder?.userShipping?.state}
          </li>
          <li>
            {latestOrder?.userShipping?.country} –{" "}
            {latestOrder?.userShipping?.pincode}
          </li>
          <li>{latestOrder?.userShipping?.address}</li>
        </ul>
      </div>
    </div>
    <div className="flex justify-center mt-10">
  <button
    onClick={() => navigate("/")}
    className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-10 py-3 rounded-full text-sm font-medium transition"
  >
    Continue shopping
    <FiArrowRight size={16} />
  </button>
</div>

  </section>
</>
  );
};

export default OrderConfirmation;
