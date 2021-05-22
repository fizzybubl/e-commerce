import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <main>
      <section className="about-page">
        <header className="products-header">
          <h2>
            <Link to="/">
              <span> Home</span>
            </Link>{" "}
            / About Us
          </h2>
        </header>
        <div className="about-center">
          <article className="start-page">
            <img
              className="about-img"
              src="https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571471.jpg&fm=jpg"
              alt=""
            />

            <div className="page-info">
              <header className="about-us-header">
                <h1>About Us</h1>
                <div className="underline-about underline"></div>
              </header>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident doloremque, tempora itaque rem fugit illum a ut, sit
                consectetur magnam repellat fugiat excepturi esse necessitatibus
                repudiandae perspiciatis quod laboriosam? Quasi atque id
                deserunt unde alias facilis quia praesentium sapiente commodi
                possimus odio, illum iste fugit exercitationem, qui quaerat
                aperiam natus hic ducimus perspiciatis velit vel repudiandae.
                Cum eaque nobis dolorum, aperiam voluptates, illum sapiente
                corporis architecto, nesciunt necessitatibus quidem quasi
                commodi. Ipsum impedit officia nobis natus odio quis aliquid
                velit!
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default About;
