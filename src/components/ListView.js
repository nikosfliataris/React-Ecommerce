import React from "react";
import "./ListView.scss";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
const ListView = ({ products }) => {
  return (
    <section className="listview">
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <article className="" key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className="price">{formatPrice(price)}</h5>
              <p>{description.substring(0, 100)}...</p>
              <Link to={`/products/${id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ListView;
