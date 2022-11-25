import React from "react";
import "./CartPage.scss";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";

const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1)
    return (
      <main className="cart-page">
        <div className="empty">
          <h2>Your cart is Empty</h2>
          <Link to="/products" className="btn">
            Buy Now
          </Link>
        </div>
      </main>
    );
  return (
    <main>
      <PageHero title="cart" />
      <div className="cart-page page">
        <CartContent />
      </div>
    </main>
  );
};

export default CartPage;
