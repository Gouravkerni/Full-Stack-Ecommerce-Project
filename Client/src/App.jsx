import React, { useContext } from "react";
import AppContext from "./context/AppContext";
import ShowProducts from "./components/product/ShowProducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/product/ProductDetails";
import Navbar from "./components/Navbar";
import SearchProduct from "./components/product/SearchProduct";
import Register from "./components/user/Register";
import { ToastContainer, toast } from "react-toastify";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile";
import Cart from "./components/Cart.jsx";
import Address from "./components/Address.jsx";
import Checkout from "./components/Checkout.jsx";
import OrderConfirmation from "./components/OrderConfirmation.jsx";
import Footer from "./components/Footer";


const App = () => {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<ShowProducts />} />
        <Route path="/product/search/:term" element={<SearchProduct />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Address />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderconfirmation" element={<OrderConfirmation />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
