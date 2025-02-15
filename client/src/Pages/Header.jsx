import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Make sure this CSS file is imported

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        {/* Left side - Navigation Links */}
        <div className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/order">Order</Link></li>
          <li><Link to="/table-booking">Table</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </div>

        {/* Right side - Logo */}
        <li className="logo">
          <Link to="/">Melty Magic</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
