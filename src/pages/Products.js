import React, { useRef } from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import { FaSearch, FaElementor, FaWindows } from "react-icons/fa";
import Product from "../components/Product";

function Products() {
  const {
    products,
    price,
    setPrice,
    setName,
    setCompany,
    company,
    categories,
    companies,
    setCategory,
    view,
    setView,
  } = useGlobalContext();
  const priceRef = useRef(null);
  const searchRef = useRef(null);
  const companyRef = useRef(null);

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
      <section className="products-center">
        <aside className="config-bar">
          <form className="search-product">
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              ref={searchRef}
              onChange={() => setName(searchRef.current.value)}
            />
          </form>
          <div className="categories">
            <h3>Categories</h3>
            {categories
              .reduce(
                (value, category) => {
                  if (!value.includes(category)) {
                    value.push(category);
                  }
                  return value;
                },
                ["all"]
              )
              .map((category, index) => {
                return (
                  <button
                    className="category"
                    key={index}
                    onClick={() => setCategory(category)}
                  >
                    {category}
                  </button>
                );
              })}
          </div>

          <div className="companies-container">
            <h3>Company</h3>
            <select
              name="company"
              id="company"
              className="companies"
              onChange={() => setCompany(companyRef.current.value)}
              value={company}
              ref={companyRef}
            >
              {companies
                .reduce(
                  (value, company) => {
                    if (!value.includes(company)) {
                      value.push(company);
                    }
                    return value;
                  },
                  ["all"]
                )
                .map((company, index) => {
                  return (
                    <option value={company} name={company} key={index}>
                      {company}
                    </option>
                  );
                })}
            </select>
          </div>

          <div className="range-container">
            <h3>Price</h3>
            <p>${price}</p>
            <form className="price">
              <input
                name="price"
                type="range"
                min="300"
                max="3500"
                value={price}
                ref={priceRef}
                onChange={() => {
                  setPrice(Number(priceRef.current.value));
                }}
              />
            </form>
          </div>
        </aside>
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
      <footer>
        <p>
          &#169; 2021 {"   "}
          <span className="logo">
            <span>E</span>-Commerce
          </span>{" "}
          {"   "} All rights reserved.
        </p>
      </footer>
    </main>
  );
}

export default Products;
