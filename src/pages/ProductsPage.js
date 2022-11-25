import React from "react";
import "./ProductsPage.scss";
import { Filters, ProductList, Sort, PageHero } from "../components";

const ProductsPage = () => {
  return (
    <main>
      <PageHero title="products" />
      <div className="product-page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
