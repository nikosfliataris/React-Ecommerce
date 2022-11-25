import React from "react";
import "./GridView.scss";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <section className="gridview">
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default GridView;
