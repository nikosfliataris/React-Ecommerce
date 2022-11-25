import React from "react";
import "./CheckoutPage.scss";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

function CheckoutPage() {
  const { cart } = useCartContext();
  return (
    <main>
      <PageHero title="CheckOut" />
      <div className="checkout-page page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Your cart is Empty</h2>
            <Link to="/products" className="btn">
              Back to products
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </div>
    </main>
  );
}

export default CheckoutPage;
