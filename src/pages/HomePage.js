import React from "react";
import { FeaturedProducts, Hero, Services, Contact } from "../components";
import "./HomePage.scss";
const HomePage = () => {
  return (
    <main className="Home-page">
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
