import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserPlus, FaWindowClose } from "react-icons/fa";
import { useGlobalContext } from "../context";

function Sidebar() {
  const { showSidebar, setShowSidebar, cartItems } = useGlobalContext();
  const totalItems = cartItems.reduce((value, item) => {
    value += item.quantity;
    return value;
  }, 0);
  return (
    <aside className={`sidebar ${showSidebar && "show-sidebar"}`}>
      <button
        className="close-sidebar"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <FaWindowClose />
      </button>
      <div className="sidebar-center">
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
            <button className="btn user-btn">
              <span>Cart</span> <FaShoppingCart />
              <div className="number-items">
                <p className="total-items">{totalItems}</p>
              </div>
            </button>
          </Link>
          <Link to="/home">
            <button className="btn user-btn">
              <span>Login</span> <FaUserPlus />
            </button>
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
