import React, { useContext, useEffect, useState } from "react";

const ShowOrderProduct = ({ items }) => {
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let qty = 0;
    let price = 0;
    if (items) {
      for (let i = 0; i < length; i++) {
        qty += items[i].qty;
        price += items[i].price;
      }
    }
    setPrice(price);
    setQty(qty);
  }, [items]);

  return (
    <div className="space-y-5">
      {items?.map((product) => (
        <div
          key={product._id}
          className="flex items-center gap-5 border border-border-soft rounded-xl p-4"
        >
          {/* IMAGE */}
          <div className="bg-bg-soft rounded-lg p-3">
            <img
              src={product.imgSrc}
              alt={product.title}
              className="w-20 h-20 object-contain"
            />
          </div>

          {/* INFO */}
          <div className="flex-1">
            <h4 className="text-sm font-medium mb-1">{product.title}</h4>
            <p className="text-sm text-text-muted">Quantity: {product.qty}</p>
          </div>

          {/* PRICE */}
          <div className="text-sm font-medium">₹{product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default ShowOrderProduct;
