import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import { Link, useParams } from "react-router-dom";

const SearchProduct = () => {
  const { products } = useContext(AppContext);
  const [searchedProduct, setSearchedProduct] = useState([]);

  const { term } = useParams();

  useEffect(() => {
    setSearchedProduct(
      products.filter((data) =>
        data?.title?.toLowerCase().includes(term.toLocaleLowerCase())
      )
    );
  }, [term, products]);

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-20">
  
  {/* HEADER */}
  <div className="mb-12">
    <h1 className="text-2xl font-medium mb-2">
      Search results
    </h1>
    <p className="text-sm text-text-muted">
      Showing results for your search
    </p>
  </div>

  {/* EMPTY STATE */}
  {searchedProduct?.length === 0 ? (
    <p className="text-text-muted">
      No products found. Try searching something else.
    </p>
  ) : (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {searchedProduct?.map((product) => (
        <div
          key={product._id}
          className="bg-white border border-border-soft rounded-2xl overflow-hidden hover:shadow-sm transition"
        >
          {/* IMAGE */}
          <Link
            to={`/product/${product._id}`}
            className="block bg-bg-soft"
          >
            <img
              src={product.imgSrc}
              alt={product.title}
              className="w-full h-60 object-contain p-6"
            />
          </Link>

          {/* CONTENT */}
          <div className="p-5">
            <h3 className="text-sm font-medium mb-2 line-clamp-1">
              {product.title}
            </h3>

            <p className="text-text-muted text-sm mb-4">
              ₹{product.price}
            </p>

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
              className="w-full border border-border-soft rounded-full py-2 text-sm hover:border-accent hover:text-accent transition"
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
</section>

    </>
  );
};

export default SearchProduct;
