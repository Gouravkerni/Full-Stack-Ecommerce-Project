import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AppContext from "../context/AppContext";
import { FiShoppingBag, FiUser, FiLogOut, FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState(" ");
  const navigate = useNavigate();

  const { setFilteredData, products, logout, isAuthenticated, cart } =
    useContext(AppContext);
  console.log("user cart", cart);

  const filterByCategory = (cat) => {
    setFilteredData(
      products.filter(
        (data) => data.category.toLowerCase() == cat.toLowerCase()
      )
    );
  };

  const filterByPrice = (price) => {
    setFilteredData(products.filter((data) => data.price >= price));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/product/search/${searchTerm}`);
    setSearchTerm(" ");
  };

  return (
    <>
      <nav className="w-full bg-white border-b border-border-soft">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* LEFT - BRAND */}
          <Link to="/" className="text-lg font-medium tracking-wide">
            AURORA
          </Link>

          {/* CENTER - SEARCH */}
          <form
            onSubmit={submitHandler}
            className="hidden md:flex w-[420px] relative"
          >
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-sm" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search products"
              className="w-full rounded-full border border-border-soft pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-accent"
            />
          </form>

          {/* RIGHT - ACTIONS */}
          <div className="flex items-center gap-4 text-sm">
            {isAuthenticated ? (
              <>
                {/* CART */}
                <Link to="/cart" className="relative flex items-center gap-1">
                  <FiShoppingBag size={18} />
                  {cart?.items?.length > 0 && (
                    <span className="absolute -top-2 -right-3 bg-accent text-white text-[11px] px-2 py-[1px] rounded-full">
                      {cart.items.length}
                    </span>
                  )}
                </Link>

                <Link
                  to="/profile"
                  className="flex items-center gap-1 text-text-muted hover:text-text-main transition"
                >
                  <FiUser size={16} />
                  Profile
                </Link>

                <button
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                  className="flex items-center gap-1 text-text-muted hover:text-text-main transition"
                >
                  <FiLogOut size={16} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-text-muted hover:text-text-main transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="border border-border-soft rounded-full px-4 py-1.5 hover:border-accent transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* SUB NAV (ONLY HOME) */}
      {location.pathname === "/" && (
        <div className="bg-bg-soft border-b border-border-soft">
          <div className="max-w-7xl mx-auto px-6 py-3 flex gap-3 overflow-x-auto text-sm">
            <button
              onClick={() => setFilteredData(products)}
              className="filter-chip"
            >
              All
            </button>

            <button
              onClick={() => filterByCategory("Essentials")}
              className="filter-chip"
            >
              Essentials
            </button>

            <button
              onClick={() => filterByCategory("Wellness")}
              className="filter-chip"
            >
              Wellness
            </button>

            <button
              onClick={() => filterByCategory("Home")}
              className="filter-chip"
            >
              Home
            </button>
            <button
              onClick={() => filterByCategory("Lifestyle")}
              className="filter-chip"
            >
              Lifestyle
            </button>

            <button
              onClick={() => filterByPrice(999)}
              className="filter-chip"
            >
              ₹999+

            </button>

            <button
              onClick={() => filterByPrice(1999)}
              className="filter-chip"
            >
              ₹1,999+
            </button>

            <button
              onClick={() => filterByPrice(3999)}
              className="filter-chip"
            >
              ₹3,999+
            </button>

            <button
              onClick={() => filterByPrice(5999)}
              className="filter-chip"
            >
              ₹5,999+
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
