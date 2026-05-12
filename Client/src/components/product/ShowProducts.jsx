import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

const ShowProducts = () => {
  const { products, filteredData, addToCart } = useContext(AppContext);

  return (
    <>
      {/* HERO SECTION */}
<section className="bg-bg-soft">
  <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
    
    {/* LEFT TEXT */}
    <div>
      <p className="text-sm tracking-wide text-text-muted mb-3">
        NATURAL • CALM • MODERN
      </p>

      <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
        Discover products that<br /> bring calm to your life
      </h1>

      <p className="text-text-muted mb-8 max-w-md">
        Thoughtfully curated essentials designed with simplicity,
        quality, and everyday comfort in mind.
      </p>

      <Link
        to="/"
        className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-full text-sm transition"
      >
        Shop collection
      </Link>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd"
        alt="Hero"
        className="rounded-3xl object-cover w-full h-[420px]"
      />
    </div>

  </div>
</section>
<section className="max-w-7xl mx-auto px-6 py-20">
  <h2 className="text-2xl font-medium mb-10">
    Featured Products
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {filteredData?.map((product) => (
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
</section>

    </>
  );
};

export default ShowProducts;
