import React from "react";
import "./CartContent.scss";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { cart, ClearCart } = useCartContext();

  return (
    <section className="cart-content section section-center">
      <CartColumns />
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn">
          Continue Shopping
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={ClearCart}
        >
          Clear Cart
        </button>
      </div>
      <CartTotals />
    </section>
  );
};

export default CartContent;
