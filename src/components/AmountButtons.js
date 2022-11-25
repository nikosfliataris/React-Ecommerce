import React from "react";
import "./AmountButtons.scss";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ amount, increase, decrease }) => {
  return (
    <div className="amount-buttons  amount-btns">
      <button type="button" className="amount-btn" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button type="button" className="amount-btn" onClick={increase}>
        <FaPlus />
      </button>
    </div>
  );
};

export default AmountButtons;
