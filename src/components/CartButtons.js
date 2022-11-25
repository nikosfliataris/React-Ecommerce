import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./CartButtons.scss";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

function CartButtons() {
  const { CloseSideBar } = useProductsContext();
  const { total_items, ClearCart } = useCartContext();
  const { loginWithRedirect, logout, myUser } = useUserContext();

  return (
    <div className="cart-buttons cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={CloseSideBar}>
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      {!myUser ? (
        <button type="button" className="auth-btn" onClick={loginWithRedirect}>
          LogIn <FaUserPlus />
        </button>
      ) : (
        <button
          type="button"
          className="auth-btn"
          onClick={() => {
            logout({ returnTo: window.location.origin });
            ClearCart();
          }}
        >
          LogOut <FaUserMinus />
        </button>
      )}
    </div>
  );
}

export default CartButtons;
