import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserPlus, FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

function Navbar() {
  const { showSiderbar, setShowSidebar } = useGlobalContext();
  return (
    <nav className="nav-bar">
      <div className="nav-center">
        <Link to="/">
          <h3 className="logo">
            <span>E</span>-Commerce
          </h3>
        </Link>
        <button
          className="btn toggle-btn"
          onClick={() => setShowSidebar(!showSiderbar)}
        >
          <FaBars />
        </button>
        <div className="links-container">
          <Link to="/">
            <button className="btn">Home</button>
          </Link>

          <Link to="/about">
            <button className="btn">About</button>
          </Link>
          <Link to="/products">
            <button className="btn">Products</button>
          </Link>
        </div>
        <div className="user-container">
          <Link to="/home">
            <button className="btn user-btn">
              <span>Cart</span> <FaShoppingCart />
            </button>
          </Link>
          <Link to="/home">
            <button className="btn user-btn">
              <span>Login</span> <FaUserPlus />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
