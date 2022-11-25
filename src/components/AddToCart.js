import React, { useState } from "react";
import "./AddToCart.scss";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;
  const { AddToCart } = useCartContext();
  const [mainColors, setMainColors] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  function Increase() {
    setAmount((old) => {
      let temp = old + 1;
      if (temp > stock) {
        temp = stock;
      }
      return temp;
    });
  }
  function Decrease() {
    setAmount((old) => {
      let temp = old - 1;
      if (temp < 1) {
        temp = 1;
      }
      return temp;
    });
  }

  return (
    <section className="addtoCart">
      <div className="colors">
        <span>colors:</span>
        <div>
          {colors.map((color, index) => (
            <button
              key={index}
              className={`${
                mainColors === color ? "color-btn active" : "color-btn"
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setMainColors(color)}
            >
              {mainColors === color ? <FaCheck /> : null}
            </button>
          ))}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increase={Increase}
          decrease={Decrease}
        />
        <button
          className="btn"
          onClick={() => AddToCart(id, mainColors, amount, product)}
        >
          Add To Cart
        </button>
      </div>
    </section>
  );
};

export default AddToCart;
