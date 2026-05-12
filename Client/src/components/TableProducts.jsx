import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";

const TableProducts = ({ cart }) => {
  const { decreaseQty, addToCart, removeFromCart, clearCart } =
    useContext(AppContext);
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);

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

  return (
    <>
      <div className="space-y-6">
        {cart?.items?.map((product) => (
          <div
            key={product._id}
            className="flex items-center gap-6 border border-border-soft rounded-xl p-4"
          >
            {/* IMAGE */}
            <div className="bg-bg-soft rounded-lg p-3">
              <img
                src={product.imgSrc}
                alt={product.title}
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* TITLE */}
            <div className="flex-1">
              <h4 className="text-sm font-medium mb-1">{product.title}</h4>
              <p className="text-sm text-text-muted">₹{product.price}</p>
            </div>

            {/* QTY */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => decreaseQty(product?.productId, 1)}
                className="border border-border-soft rounded-full p-2 hover:border-accent transition"
              >
                <FiMinus size={14} />
              </button>

              <span className="text-sm w-6 text-center">{product.qty}</span>

              <button
                onClick={() =>
                  addToCart(
                    product?.productId,
                    product?.title,
                    product?.price / product?.qty,
                    1,
                    product?.imgSrc
                  )
                }
                className="border border-border-soft rounded-full p-2 hover:border-accent transition"
              >
                <FiPlus size={14} />
              </button>
            </div>

            {/* REMOVE */}
            <button
              onClick={() => {
                if (confirm("Are you sure you want to remove this item?")) {
                  removeFromCart(product?.productId);
                }
              }}
              className="text-text-muted hover:text-text-main transition"
            >
              <FiTrash2 size={16} />
            </button>
          </div>
        ))}

        {/* TOTAL SUMMARY */}
        <div className="flex justify-between items-center pt-6 border-t border-border-soft text-sm">
          <span className="text-text-muted">
            Total items: <strong className="text-text-main">{qty}</strong>
          </span>
          <span className="text-text-muted">
            Total price: <strong className="text-text-main">₹{price}</strong>
          </span>
        </div>
      </div>
    </>
  );
};

export default TableProducts;
