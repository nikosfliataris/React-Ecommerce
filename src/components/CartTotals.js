import React from "react";
import "./CartTotals.scss";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();
  return (
    <article className="cart-total">
      <div>
        <article>
          <h5>
            subtotal:<span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee: <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total:<span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to="/checkout" className="btn">
            procced to checkout
          </Link>
        ) : (
          <button type="button" onClick={loginWithRedirect} className="btn">
            LogIn
          </button>
        )}
      </div>
    </article>
  );
};

export default CartTotals;
