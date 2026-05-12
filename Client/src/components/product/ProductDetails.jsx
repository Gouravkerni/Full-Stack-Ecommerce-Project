import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RelatedProduct from "./RelatedProduct";
import { FiShoppingCart } from "react-icons/fi";


const ProductDetails = () => {
  const [product, setProduct] = useState();
  const url = "http://localhost:2000/api";
  const { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      const api = await axios.get(`${url}/product/${id}`, {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      });
      console.log(api.data.product);
      setProduct(api.data.product);
    };

    fetchProduct();
  }, [id]);
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT – IMAGE */}
          <div className="bg-bg-soft rounded-3xl flex items-center justify-center p-16">
            <img
              src={product?.imgSrc}
              alt={product?.title}
              className="w-[320px] h-[320px] object-contain"
            />
          </div>

          {/* RIGHT – DETAILS */}
          <div>
            <h1 className="text-3xl font-medium mb-4">{product?.title}</h1>

            <p className="text-text-muted mb-6 leading-relaxed">
              {product?.decription}
            </p>

            <p className="text-2xl font-medium mb-8">₹{product?.price}</p>

            <div className="flex gap-4">
              <button className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-full text-sm transition">
                Buy now
              </button>

              <button
  onClick={() =>
    addToCart(
      product._id,
      product.title,
      product.price,
      1,
      product.imgSrc
    )
  }
  className="flex items-center gap-2 border border-border-soft px-8 py-3 rounded-full text-sm hover:border-accent transition"
>
  <FiShoppingCart size={16} />
  Add to cart
</button>

            </div>
          </div>
        </div>
      </section>

      <RelatedProduct category={product?.category} />
    </>
  );
};

export default ProductDetails;
