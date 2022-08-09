import { combineReducers } from "redux";
import { allProductsReducer, selectedProductsReducer } from "./productsReducer";

const reducers = combineReducers({
  allProducts: allProductsReducer,
  product: selectedProductsReducer,
  // cartProduct: selectedCartReduer 
});
export default reducers;
