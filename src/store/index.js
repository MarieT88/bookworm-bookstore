import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import auth from "./auth";
import cart from "./cart";
import orders from "./orders";
import products from "./products";
import reviews from "./reviews";
import addresses from "./addresses";

//import orders from './orders';

const reducer = combineReducers({
  auth,
  cart,
  products,
  reviews,
  orders,
  addresses,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));


export default store;

export * from "./auth";
export * from "./cart";
export * from "./products";
export * from "./orders";
export * from "./reviews";
export * from "./addresses";
