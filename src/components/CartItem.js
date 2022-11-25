import React from "react";
import "./CartItem.scss";
import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
const CartItem = ({ id, img, name, color, price, amount }) => {
  const { RemoveItem, ToggleAmount } = useCartContext();
  function increase() {
    ToggleAmount(id, "inc");
  }
  function decrease() {
    ToggleAmount(id, "dec");
  }
  return (
    <article className="cart-item">
      <div className="title">
        <img src={img} alt={name} />
        <div>
          <h5 className="name">{name}</h5>
          <p className="color">
            color:<span style={{ background: color }}></span>
          </p>
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className="subytotal">{formatPrice(price * amount)}</h5>
      <button
        type="button"
        className="remove-btn"
        onClick={() => RemoveItem(id)}
      >
        <FaTrash />
      </button>
    </article>
  );
};

export default CartItem;
