import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";
function Cart() {
  const { cartItems, handleToggleCart, deleteItem, setCartItems } =
    useGlobalContext();

  if (!cartItems.length) {
    return (
      <main>
        <section>
          <div className="title">
            <div className="empty-container">
              <h2>Cart is Empty</h2>
              <Link to="/products">
                <button className="btn">Start shopping!</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const total = cartItems.reduce((value, item) => {
    value = value + item.quantity * item.price;
    return value;
  }, 0);
  console.log(cartItems);
  return (
    <section className="cart">
      <table>
        <tbody className="cart-list">
          <tr className="cart-header">
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
          {cartItems.map((item) => {
            const { name, price, quantity, image, id } = item;
            return (
              <tr className="cart-item" key={Math.random() * 10000}>
                <td className="cart-item-info">
                  <img src={image} alt="" className="cart-img" />
                  <h4>{name}</h4>
                </td>
                <td>
                  <p className="price">${price}</p>
                </td>

                <td className="cart-btn">
                  <button
                    className="btn cart-btn-dec"
                    onClick={() => handleToggleCart("dec", id)}
                  >
                    <AiOutlineMinus />
                  </button>
                  <h2>{quantity}</h2>
                  <button
                    className="btn cart-btn-inc"
                    onClick={() => handleToggleCart("inc", id)}
                  >
                    <AiOutlinePlus />
                  </button>
                </td>
                <td>
                  <p className="price">${quantity * price}</p>
                </td>
                <td>
                  <button
                    className="delete-item btn"
                    onClick={() => deleteItem(id)}
                  >
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            );
          })}
          <tr className="cart-footer">
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>
              Total
              <p className="price total">${total}</p>
            </th>
          </tr>
        </tbody>
      </table>
      <div className="btn-container">
        <Link to="/products">
          <button className="btn shopping-btn">Continue Shopping</button>
        </Link>
        <button className="btn clear-cart-btn" onClick={() => setCartItems([])}>
          Clear Cart
        </button>
      </div>
    </section>
  );
}

export default Cart;
