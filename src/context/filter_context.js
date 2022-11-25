import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { useProductsContext } from "./products_context";

const initialState = {
  filtered_Products: [],
  all_Products: [],
  grid_view: true,
  sort_list_Products: "price-lowest",
  filters: {
    text: "",
    company: "all",
    category: "all",
    colors: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { Products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: Products });
  }, [Products]);
  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [Products, state.sort_list_Products, state.filters]);

  function SetGridView() {
    dispatch({ type: SET_GRIDVIEW });
  }
  function SetListView() {
    dispatch({ type: SET_LISTVIEW });
  }
  function UpdateSort(e) {
    dispatch({ type: UPDATE_SORT, payload: e.target.value });
  }
  function UpdateFilters(e) {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "colors") {
      value = e.target.dataset.color;
    }
    if (name === "price") {
      value = parseInt(e.target.value);
    }
    if (name === "shipping") {
      value = e.target.checked;
    }
    dispatch({
      type: UPDATE_FILTERS,
      payload: { name, value },
    });
  }
  function ClearFilters() {
    dispatch({ type: CLEAR_FILTERS });
  }
  return (
    <FilterContext.Provider
      value={{
        ...state,
        SetGridView,
        SetListView,
        UpdateSort,
        UpdateFilters,
        ClearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
