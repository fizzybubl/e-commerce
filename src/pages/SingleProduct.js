import React from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useGlobalContext } from "../context";

function SingleProduct() {
  const { products, addToCart, amount, setAmount, handleToggle } =
    useGlobalContext();
  let { id } = useParams();
  id = Number(id);

  const [product] = products.filter((prod) => prod.id === id);
  const { image, info, name, company, price } = product;

  React.useEffect(() => {
    setAmount(1);
  }, []);

  return (
    <section className="single-product">
      <header className="products-header">
        <h2>
          <Link to="/">
            <span> Home</span>
          </Link>{" "}
          /{" "}
          <Link to="/products">
            <span> Products</span>
          </Link>{" "}
          / {name}
        </h2>
      </header>
      <article className="product-container">
        <div className="single-product-center">
          <Link to="/products">
            <button className="back-btn btn">BACK TO PRODUCTS</button>
          </Link>
          <div className="product-img">
            <img src={image} alt={name} />
          </div>
        </div>
        <div className="product-info">
          <h2>{name}</h2>
          <p className="price">${price}</p>
          <p>{info}</p>
          <h4>Available: In Stock</h4>
          <h4>ID: {id}</h4>
          <h4>Brand: {company}</h4>
          <div className="cart-btn">
            <button className="decrease" onClick={() => handleToggle("dec")}>
              <AiOutlineMinus />
            </button>
            <h1>{amount}</h1>
            <button className="increase" onClick={() => handleToggle("inc")}>
              <AiOutlinePlus />
            </button>
            <button
              className="add-cart-btn"
              onClick={() => addToCart(id, amount)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </article>
      <footer>
        <p>
          &#169; 2021 {"   "}
          <span className="logo">
            <span>E</span>-Commerce
          </span>{" "}
          {"   "} All rights reserved.
        </p>
      </footer>
    </section>
  );
}

export default SingleProduct;
