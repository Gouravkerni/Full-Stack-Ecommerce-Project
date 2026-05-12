import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

const RelatedProduct = ({ category }) => {
  const { products } = useContext(AppContext);
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    setRelatedProduct(
      products.filter(
        (data) => data?.category?.toLowerCase() == category?.toLowerCase()
      )
    );
  }, [category, products]);

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-medium mb-10">Related products</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {relatedProduct?.map((product) => (
            <div
              key={product._id}
              className="bg-white border border-border-soft rounded-2xl overflow-hidden hover:shadow-sm transition"
            >
              <Link to={`/product/${product._id}`} className="block bg-bg-soft">
                <img
                  src={product.imgSrc}
                  alt={product.title}
                  className="w-full h-56 object-contain p-6"
                />
              </Link>

              <div className="p-5">
                <h3 className="text-sm font-medium mb-2 line-clamp-1">
                  {product.title}
                </h3>

                <p className="text-text-muted text-sm mb-4">₹{product.price}</p>

                <button className="w-full border border-border-soft rounded-full py-2 text-sm hover:border-accent hover:text-accent transition">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RelatedProduct;
