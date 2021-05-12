import React, { useState, useEffect, useContext, useReducer } from "react";
import data from "./data";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [products, setProducts] = useState(data);
  const [price, setPrice] = useState(3500);
  const [categories, setCategories] = useState(
    data.map((product) => product.category)
  );
  const [companies, setCompanies] = useState(
    data.map((product) => product.company)
  );
  const [company, setCompany] = useState("all");
  const [category, setCategory] = useState("all");
  const [name, setName] = useState("");
  const [view, setView] = useState("grid");

  const filterProducts = () => {
    if (company !== "all" && category !== "all") {
      const newProducts = data.filter(
        (product) =>
          product.company === company &&
          product.category === category &&
          product.price <= price
      );
      setProducts(newProducts);
    } else if (company !== "all") {
      const newProducts = data.filter(
        (product) => product.company === company && product.price <= price
      );
      setProducts(newProducts);
    } else if (category !== "all") {
      const newProducts = data.filter(
        (product) => product.category === category && product.price <= price
      );
      setProducts(newProducts);
    } else {
      const newProducts = data.filter((product) => product.price <= price);
      setProducts(newProducts);
    }
  };

  useEffect(() => {
    filterProducts();
  }, [price, name, company, category]);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        showSidebar,
        setShowSidebar,
        products,
        price,
        setPrice,
        setName,
        categories,
        companies,
        company,
        setCompany,
        setCategory,
        view,
        setView,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
