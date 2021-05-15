import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { FaSearch, FaRegNewspaper, FaInvision, FaReact } from "react-icons/fa";
import Product from "../components/Product";
import data from "../data";

function Home() {
  const { setView, products, setProducts } = useGlobalContext();

  React.useEffect(() => {
    setView("grid");
    setProducts(data);
  }, []);

  return (
    <main>
      <section className="home-center">
        <article className="start-page">
          <div className="page-info">
            <h1>Lorem ipsum dolor sit.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, blanditiis. Rem ad fugiat illo dolor?
            </p>
            <Link to="/products">
              <button className="shop-now">shop now</button>
            </Link>
          </div>
          <img
            src="https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571471.jpg&fm=jpg"
            alt=""
          />
        </article>
      </section>
      <section className="featured-products">
        <header>
          <h1>featured products</h1>
          <div className="underline"></div>
        </header>
        <div className="grid-container">
          {products.map((product) => {
            if (product.showPage) {
              return <Product {...product} key={product.id} />;
            }
          })}
        </div>
        <Link to="/products">
          <button className="btn all-products">all products</button>
        </Link>
      </section>
      <section className="about-us">
        <h2>Custom stuff</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          distinctio, impedit illum sint nihil aliquam?
        </p>

        <div className="grid-container">
          <div className="mission">
            <FaReact className="icon" />
            <h3>Mission</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae iste a ipsam fugiat sint nostrum vel voluptatum omnis
              quasi exercitationem?
            </p>
          </div>
          <div className="vision">
            <FaInvision className="icon" />
            <h3>Vision</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae iste a ipsam fugiat sint nostrum vel voluptatum omnis
              quasi exercitationem?
            </p>
          </div>
          <div className="history">
            <FaRegNewspaper className="icon" />
            <h3>History</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae iste a ipsam fugiat sint nostrum vel voluptatum omnis
              quasi exercitationem?
            </p>
          </div>
        </div>
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

export default Home;
