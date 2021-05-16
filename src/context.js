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
  const [cartItems, setCartItems] = useState([]);
  const [amount, setAmount] = useState(1);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [coords, setCoords] = useState({});

  const openUserMenu = (location) => {
    setCoords(location);
    setShowUserMenu(true);
  };
  const closeUserMenu = () => {
    setShowUserMenu(false);
  };

  const deleteItem = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  const handleToggleCart = (type, id) => {
    if (type === "inc") {
      const newCartItems = cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(newCartItems);
    } else {
      const newCartItems = cartItems
        .map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
      setCartItems(newCartItems);
    }
  };

  const handleToggle = (type, id) => {
    if (type === "dec") {
      if (amount > 1) {
        setAmount(amount - 1);
      }
    } else {
      setAmount(amount + 1);
    }
  };

  const addToCart = (id, amount) => {
    console.log(id, amount);
    const [product] = cartItems.filter((item) => item.id === id);

    if (product) {
      const otherProducts = cartItems.filter((item) => item.id !== product.id);
      setCartItems([
        ...otherProducts,
        { ...product, quantity: product.quantity + amount },
      ]);
    } else {
      const [newProduct] = products.filter((item) => item.id === id);

      setCartItems([...cartItems, { ...newProduct, quantity: amount }]);
    }
  };

  const filterProducts = () => {
    if (company !== "all" && category !== "all" && name) {
      const newProducts = data.filter(
        (product) =>
          product.company === company &&
          product.category === category &&
          product.price <= price &&
          item.name.includes(name)
      );
      setProducts(newProducts);
    } else if (company !== "all" && name) {
      const newProducts = data.filter(
        (product) =>
          product.company === company &&
          product.price <= price &&
          item.name.includes(name)
      );
      setProducts(newProducts);
    } else if (category !== "all" && name) {
      const newProducts = data.filter(
        (product) =>
          product.category === category &&
          product.price <= price &&
          item.name.includes(name)
      );
      setProducts(newProducts);
    } else if (category !== "all" && company !== "all") {
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
    } else if (category !== "all") {
      const newProducts = data.filter(
        (product) => product.category === category && product.price <= price
      );
    } else if (name) {
      const newProducts = data.filter(
        (product) => product.price <= price && item.name.includes(name)
      );
      setProducts(newProducts);
    } else {
      const newProducts = data.filter((product) => product.price <= price);
      setProducts(newProducts);
    }
  };

  const sortProducts = (e) => {
    let sortedProducts = [...products];
    const sortType = e.target.value;

    switch (sortType) {
      case "lowest":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "highest":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "a-z":
        sortedProducts.sort((a, b) => {
          let nameA = a.name.toUpperCase();
          let nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        break;
      case "z-a":
        sortedProducts.sort((a, b) => {
          let nameA = a.name.toUpperCase();
          let nameB = b.name.toUpperCase();
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        });
        break;
    }
    setProducts(sortedProducts);
  };

  useEffect(() => {
    filterProducts();
  }, [price, company, category, name]);

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
        setProducts,
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
        addToCart,
        cartItems,
        amount,
        setAmount,
        handleToggle,
        handleToggleCart,
        deleteItem,
        setCartItems,
        openUserMenu,
        closeUserMenu,
        showUserMenu,
        coords,
        sortProducts,
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
