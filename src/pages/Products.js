import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import { FaElementor, FaWindows } from "react-icons/fa";
import { FiTriangle } from "react-icons/fi";
import Product from "../components/Product";
import ConfigBar from "../components/ConfigBar";
function Products() {
  const {
    products,
    view,
    setView,
    sortProducts,
    viewConfigBar,
    setViewConfigBar,
  } = useGlobalContext();

  return (
    <main>
      <header className="products-header">
        <h2>
          <Link to="/">
            <span> Home</span>
          </Link>{" "}
          / Products
        </h2>
      </header>
      {/* <button
        className="config-bar-toggle"
        onClick={() => setViewConfigBar(!viewConfigBar)}
      >
        <FiTriangle />
      </button> */}
      <section className="products-center">
        <ConfigBar />
        <section>
          <div className="options">
            <div className="options-btn">
              <button className="show-grid" onClick={() => setView("grid")}>
                <FaWindows />
              </button>
              <button className="show-list" onClick={() => setView("list")}>
                <FaElementor />
              </button>
              <p>{products.length} products found</p>
            </div>

            <div className="sort-options">
              <p>Sort by</p>
              <select
                name="sort-options-menu"
                id="sort-options-menu"
                className="sort-options-menu"
                onChange={sortProducts}
              >
                <option value="lowest">{"Price (Lowest)"}</option>
                <option value="highest">{"Price (Highest)"}</option>
                <option value="a-z">{"Name (A-Z)"}</option>
                <option value="z-a">{"Name (Z-A)"}</option>
              </select>
            </div>
          </div>
          <section
            className={view === "grid" ? "products-grid" : "products-list"}
          >
            {products.map((product) => {
              return <Product {...product} key={product.id} />;
            })}
          </section>
        </section>
      </section>
    </main>
  );
}

export default Products;
