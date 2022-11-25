import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import "./FeaturedProducts.scss";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  const {
    Products_loading: loading,
    Products_Error: error,
    Feataured_products,
  } = useProductsContext();
  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <section className="featuredProducts section">
      <div className="title">
        <h2>featured Products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {Feataured_products.filter((item, index) => index < 3).map(
          (product) => (
            <Product key={product.id} {...product} />
          )
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
