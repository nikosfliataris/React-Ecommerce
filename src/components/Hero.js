import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <section className="hero section-center">
      <article className="content">
        <h1>
          design your <br /> confort zone
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
          excepturi! Corrupti distinctio blanditiis fugit non quos facere dolor,
          qui tenetur eos est ad eius earum, atque unde at maxime ex, temporibus
          iste ab molestias totam fuga nemo ipsum? Soluta, voluptates! Numquam
          dolore dolores sint nesciunt architecto quod, sunt quis nisi?
        </p>
        <Link to="/products" className="btn hero-btn">
          Shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="nice table" className="accent-img" />
      </article>
    </section>
  );
};

export default Hero;
