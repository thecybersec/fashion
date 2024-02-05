import GET_ALL_CATEGORY from "./Reducer/getallcategory.reducer";
import GET_WISHLIST_LENGTH from "../Redux/Reducer/getwishlistlength.reducer";
import GET_CART_TOTAL from "../Redux/Reducer/getcarttotal.reducer";
import GET_CART_LENGTH from "../Redux/Reducer/getcartlength.reducer";
import LOGOUT_CHECK from "../Redux/Reducer/logout.reducer";
import GET_PRODUCTS_BY_SEARCH from "../Redux/Reducer/getproductsbysearch.reducer";

import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";

const middleware = applyMiddleware(logger, thunk);

const root = combineReducers({
  GET_ALL_CATEGORY,
  GET_CART_TOTAL,
  GET_WISHLIST_LENGTH,
  GET_CART_LENGTH,
  LOGOUT_CHECK,
  GET_PRODUCTS_BY_SEARCH,
});

const storage = createStore(root, {}, middleware);

export default storage;
