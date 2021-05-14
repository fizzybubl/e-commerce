import React from "react";
import { useGlobalContext } from "./context";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Loading from "./Loading";
import SingleProduct from "./SingleProduct";
import Navbar from "./Navbar";
import About from "./About";
import Sidebar from "./Sidebar";
import ScrollToTop from "./ScrollToTop";
import Cart from "./Cart";

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/product/:id" children={<SingleProduct />}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
