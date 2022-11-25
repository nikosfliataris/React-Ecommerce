import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map((p) => p.price);
      maxPrice = Math.max(...maxPrice);
      let minPrice = action.payload.map((p) => p.price);
      minPrice = Math.min(...minPrice);
      return {
        ...state,
        all_Products: [...action.payload],
        filtered_Products: [...action.payload],
        filters: {
          ...state.filters,
          max_price: maxPrice,
          min_price: minPrice,
          price: maxPrice,
        },
      };
    case SET_GRIDVIEW:
      return { ...state, grid_view: true };
    case SET_LISTVIEW:
      return { ...state, grid_view: false };
    case UPDATE_SORT:
      return { ...state, sort_list_Products: action.payload };
    case SORT_PRODUCTS:
      const { sort_list_Products, filtered_Products } = state;
      let tempProducts = [...filtered_Products];
      if (sort_list_Products === "price-lowest") {
        tempProducts = tempProducts.sort((a, b) => {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }
          return 0;
        });
      }
      if (sort_list_Products === "price-highest") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (sort_list_Products === "name-a") {
        tempProducts = tempProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (sort_list_Products === "name-z") {
        tempProducts = tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }

      return { ...state, filtered_Products: tempProducts };
    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };
    case FILTER_PRODUCTS:
      const { all_Products } = state;
      const { text, category, company, colors, price, shipping } =
        state.filters;
      let tempProduct = [...all_Products];
      if (text) {
        tempProduct = tempProduct.filter((item) =>
          item.name.toLowerCase().startsWith(text)
        );
      }
      if (category !== "all") {
        tempProduct = tempProduct.filter((item) => item.category === category);
      }
      if (company !== "all") {
        tempProduct = tempProduct.filter((item) => item.company === company);
      }
      if (colors !== "all") {
        tempProduct = tempProduct.filter((item) => {
          return item.colors.find((c) => c === colors);
        });
      }
      if (shipping) {
        tempProduct = tempProduct.filter((item) => item.shipping === true);
      }
      tempProduct = tempProduct.filter((item) => item.price <= price);
      return { ...state, filtered_Products: tempProduct };
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          company: "all",
          category: "all",
          colors: "all",
          price: state.filters.max_price,
          shipping: false,
        },
      };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
