import React from "react";
import "./CartColumns.scss";

const CartColumns = ({ id, name, image, price }) => {
  return (
    <div className="cart-columns">
      <div className="content">
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        <h5></h5>
      </div>
    </div>
  );
};

export default CartColumns;
