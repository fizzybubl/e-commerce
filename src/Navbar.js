import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserPlus, FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

function Navbar() {
  const { showSiderbar, setShowSidebar, cartItems } = useGlobalContext();
  const totalItems = cartItems.reduce((value, item) => {
    value += item.quantity;
    return value;
  }, 0);
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
          <Link to="/cart">
            <button className="btn user-btn cart-icon">
              <span>Cart</span> <FaShoppingCart />
              <div className="number-items">
                <p className="total-items">{totalItems}</p>
              </div>
            </button>
          </Link>
          <Link to="/home">
            <button className="btn user-btn login-icon">
              <span>Login</span> <FaUserPlus />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
