import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Product({ image, id, name, price, info }) {
  const { view } = useGlobalContext();
  return (
    <article className={view === "grid" ? "product" : "product-grid"} key={id}>
      <div className="img-container">
        <img src={image} alt={name} />
        <div className="img-overlay">
          <Link to={`/product/${id}`}>
            <button className="search-btn">
              <FaSearch />
            </button>
          </Link>
        </div>
      </div>
      <div className={view === "grid" ? "info-container" : "product-info"}>
        <h3>{name}</h3>
        <p className="price">${price}</p>
        {view === "list" && <p>{info}</p>}
      </div>
    </article>
  );
}

export default Product;
