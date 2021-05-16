import React from "react";
import { useGlobalContext } from "./context";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Loading from "./pages/Loading";
import SingleProduct from "./pages/SingleProduct";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Sidebar from "./components/Sidebar";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./pages/Cart";
import UserMenu from "./components/UserMenu";

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <UserMenu />
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
