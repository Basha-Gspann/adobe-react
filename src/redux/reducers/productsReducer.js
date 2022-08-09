import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: []
};

export const allProductsReducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS:
      return Object.assign({}, state, { products: action.payload });
    default:
      return state;
  }
};


export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

