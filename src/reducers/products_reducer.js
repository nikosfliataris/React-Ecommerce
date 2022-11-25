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

const products_reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, isSideBarOpen: true };
    case SIDEBAR_CLOSE:
      return { ...state, isSideBarOpen: false };
    case GET_PRODUCTS_BEGIN:
      return { ...state, Products_loading: true };
    case GET_PRODUCTS_SUCCESS:
      const featured_product = action.payload.filter(
        (product) => product.featured === true
      );
      return {
        ...state,
        Products: action.payload,
        Feataured_products: featured_product,
        Products_loading: false,
      };
    case GET_PRODUCTS_ERROR:
      return { ...state, Products_loading: false, Products_Error: true };
    case GET_SINGLE_PRODUCT_BEGIN:
      return {
        ...state,
        single_product_loading: true,
        single_product_error: false,
      };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        single_product: action.payload,
        single_product_loading: false,
        single_product_error: false,
      };
    case GET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        single_product_loading: false,
        single_product_error: true,
      };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
