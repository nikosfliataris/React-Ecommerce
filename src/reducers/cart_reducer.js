import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, color, amount, product } = action.payload;
      let tempItem = state.cart.find((item) => item.id === id + color);
      if (tempItem) {
        let tempcart = state.cart.map((item) => {
          if (item.id === id + color) {
            let newamount = item.amount + amount;
            if (newamount >= item.max) {
              newamount = item.max;
            }
            return { ...item, amount: newamount };
          } else {
            return item;
          }
        });

        return { ...state, cart: tempcart };
      } else {
        let newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          img: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    case REMOVE_CART_ITEM:
      let tempRemoveItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, cart: tempRemoveItem };
    case CLEAR_CART:
      return { ...state, cart: [] };
    case TOGGLE_CART_ITEM_AMOUNT:
      let tempcart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.value === "inc") {
            let newamount = item.amount + 1;
            if (newamount > item.max) {
              newamount = item.max;
            }
            return { ...item, amount: newamount };
          }
          if (action.payload.value === "dec") {
            let newamount = item.amount - 1;
            if (newamount < 1) {
              newamount = 1;
            }
            return { ...item, amount: newamount };
          }
        } else {
          return item;
        }
      });
      return { ...state, cart: tempcart };
    case COUNT_CART_TOTALS:
      const { total_items, total_amount } = state.cart.reduce(
        (total, cartItem) => {
          let { amount, price } = cartItem;
          total.total_items += amount;
          total.total_amount += price * amount;
          return total;
        },
        { total_items: 0, total_amount: 0 }
      );
      return { ...state, total_amount, total_items };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
