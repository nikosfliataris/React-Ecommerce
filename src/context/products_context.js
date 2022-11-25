import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const initialState = {
  isSideBarOpen: false,
  Products_loading: false,
  Products_Error: false,
  Products: [],
  Feataured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: [],
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function OpenSideBar() {
    dispatch({ type: SIDEBAR_OPEN });
  }
  function CloseSideBar() {
    dispatch({ type: SIDEBAR_CLOSE });
  }

  async function FETCH_PRODUCTS_FROM_EXTERNAL_API(url) {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      await axios
        .get(url)
        .then((data) =>
          dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data.data })
        );
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  }
  async function FETCH_SINGLE_PRODUCTS_FROM_EXTERNAL_API(url) {
    try {
      dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
      await axios
        .get(url)
        .then((data) =>
          dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: data.data })
        );
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  }
  useEffect(() => {
    FETCH_PRODUCTS_FROM_EXTERNAL_API(url);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        CloseSideBar,
        OpenSideBar,
        FETCH_SINGLE_PRODUCTS_FROM_EXTERNAL_API,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
