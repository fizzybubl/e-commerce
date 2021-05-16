import React from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaUserPlus,
  FaWindowClose,
  FaUserMinus,
} from "react-icons/fa";
import { useGlobalContext } from "../context";
import { useAuth0 } from "@auth0/auth0-react";

function Sidebar() {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
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
            <button className="btn" onClick={() => setShowSidebar(false)}>
              Home
            </button>
          </Link>
          <Link to="/about">
            <button className="btn" onClick={() => setShowSidebar(false)}>
              About
            </button>
          </Link>
          <Link to="/products">
            <button className="btn" onClick={() => setShowSidebar(false)}>
              Products
            </button>
          </Link>
        </div>
        <div className="user-container">
          <Link to="/cart">
            <button
              className="btn user-btn"
              onClick={() => setShowSidebar(false)}
            >
              <span>Cart</span> <FaShoppingCart />
              <div className="number-items">
                <p className="total-items">{totalItems}</p>
              </div>
            </button>
          </Link>
          {isAuthenticated ? (
            <button
              className="btn user-btn logout-icon"
              onClick={() => logout()}
            >
              <span>Log out</span> <FaUserMinus />
            </button>
          ) : (
            <button
              className="btn user-btn login-icon"
              onClick={() => loginWithRedirect()}
            >
              <span>Log in</span> <FaUserPlus />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
