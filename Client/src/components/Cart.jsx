import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";


const Cart = () => {
  const { cart, decreaseQty, addToCart, removeFromCart, clearCart } =
    useContext(AppContext);
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

  console.log("mycart", cart);

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* EMPTY CART */}
        {cart?.items?.length === 0 ? (
          <div className="text-center">
            <p className="text-text-muted mb-6">Your cart is currently empty</p>
            <button
              onClick={() => navigate("/")}
              className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-full text-sm transition"
            >
              Continue shopping
            </button>
          </div>
        ) : (
          <>
            {/* SUMMARY */}
            <div className="flex justify-between items-center mb-12">
              <div className="flex gap-6 text-sm">
                <span className="text-text-muted">
                  Total items: <strong className="text-text-main">{qty}</strong>
                </span>
                <span className="text-text-muted">
                  Total price:{" "}
                  <strong className="text-text-main">₹{price}</strong>
                </span>
              </div>
            </div>

            {/* CART ITEMS */}
            <div className="space-y-8">
              {cart?.items?.map((product) => (
                <div
                  key={product._id}
                  className="bg-white border border-border-soft rounded-2xl p-6 flex flex-col md:flex-row gap-8 items-center"
                >
                  {/* IMAGE */}
                  <div className="bg-bg-soft rounded-xl p-6">
                    <img
                      src={product.imgSrc}
                      alt={product.title}
                      className="w-32 h-32 object-contain"
                    />
                  </div>

                  {/* DETAILS */}
                  <div className="flex-1 w-full">
                    <h3 className="font-medium mb-1">{product.title}</h3>
                    <p className="text-sm text-text-muted mb-3">
                      ₹{product.price}
                    </p>
                    <p className="text-sm text-text-muted">
                      Quantity: {product.qty}
                    </p>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex gap-3">
                    <button
  onClick={() => decreaseQty(product?.productId, 1)}
  className="border border-border-soft rounded-full px-3 py-2 hover:border-accent transition"
>
  <FiMinus size={14} />
</button>

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
  className="border border-border-soft rounded-full px-3 py-2 hover:border-accent transition"
>
  <FiPlus size={14} />
</button>


                   <button
  onClick={() => {
    if (confirm("Are you sure you want to remove this item?")) {
      removeFromCart(product?.productId);
    }
  }}
  className="flex items-center gap-1 text-sm text-text-muted hover:text-text-main transition"
>
  <FiTrash2 size={14} />
  Remove
</button>

                  </div>
                </div>
              ))}
            </div>

            {/* FOOTER ACTIONS */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-16 gap-6">
              <button
                onClick={() => navigate("/shipping")}
                className="bg-accent hover:bg-accent-hover text-white px-10 py-3 rounded-full text-sm transition"
              >
                Proceed to checkout
              </button>

              <button
                onClick={() => {
                  if (confirm("Are you sure you want to clear the cart?")) {
                    clearCart();
                  }
                }}
                className="text-sm text-text-muted hover:text-text-main transition"
              >
                Clear cart
              </button>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Cart;
