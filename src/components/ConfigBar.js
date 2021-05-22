import React from "react";
import { useGlobalContext } from "../context";
const ConfigBar = () => {
  const {
    price,
    setPrice,
    setName,
    setCompany,
    company,
    categories,
    companies,
    setCategory,
    isSticky,
  } = useGlobalContext();
  const priceRef = React.useRef(null);
  const searchRef = React.useRef(null);
  const companyRef = React.useRef(null);

  return (
    <aside className={isSticky ? "config-bar sticky-bar" : "config-bar"}>
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
  );
};

export default ConfigBar;
