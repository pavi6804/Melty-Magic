import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TableBooking from "./Pages/TableBooking";
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";
import Order from "./Pages/Order";
import Header from "./Pages/Header"; // Import Header component
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <>
      <Header /> {/* Navbar will always be visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table-booking" element={<TableBooking />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        <Route path="/order" element={<Order cart={cart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
