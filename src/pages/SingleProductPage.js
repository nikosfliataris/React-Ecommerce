import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import "./SingleProductPage.scss";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    FETCH_SINGLE_PRODUCTS_FROM_EXTERNAL_API,
  } = useProductsContext();

  useEffect(() => {
    FETCH_SINGLE_PRODUCTS_FROM_EXTERNAL_API(`${url}${id}`);
  }, [id]);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  }, [error]);
  if (loading) return <Loading />;
  if (error) return <Error />;
  const { name, price, stock, stars, reviews, company, images, description } =
    product;
  return (
    <main className="singleproduct-page">
      <PageHero title={name} product />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          Back to Products
        </Link>
        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5>{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available:</span>
              {stock >= 10
                ? "In stock"
                : stock < 10
                ? "Less Than 10 In stock"
                : stock <= 5
                ? "Less Than 5 in stock"
                : "Out of stock"}
            </p>{" "}
            <p className="info">
              <span>SKU:</span>
              {id}
            </p>
            <p className="info">
              <span>Brand:</span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </main>
  );
};

export default SingleProductPage;
