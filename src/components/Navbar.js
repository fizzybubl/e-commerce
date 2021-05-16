import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserPlus, FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { useAuth0 } from "@auth0/auth0-react";
import UserMenu from "./UserMenu";

function Navbar() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const {
    showSiderbar,
    setShowSidebar,
    cartItems,
    openUserMenu,
    closeUserMenu,
    isSticky,
  } = useGlobalContext();
  const totalItems = cartItems.reduce((value, item) => {
    value += item.quantity;
    return value;
  }, 0);

  const handleUserMenu = (e) => {
    if (!e.target.classList.contains("user-menu-btn")) {
      closeUserMenu();
    }
  };

  const displayUserMenu = (e) => {
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom + 5;
    openUserMenu({ center, bottom });
  };

  return (
    <nav className={isSticky ? "nav-bar sticky" : "nav-bar"}>
      <div className="nav-center" onMouseOver={handleUserMenu}>
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

          {isAuthenticated ? (
            <div className="user-menu-toggle">
              <button
                className="user-menu-btn btn"
                onMouseOver={displayUserMenu}
              >
                {user.name}
              </button>
            </div>
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
    </nav>
  );
}

export default Navbar;
