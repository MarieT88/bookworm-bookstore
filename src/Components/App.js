import React, { useEffect, useRef } from "react";
import Home from "./Home";
import Login from "./Login";
import Cart from "./Cart";
import ProductsList from "./ProductList";
import SingleProduct from "./SingleProduct";
import Orders from "./Orders";
import Order from "./Order";
import Reviews from "./Reviews.js";
import Profile from "./Profile";
import { useSelector, useDispatch } from "react-redux";
import {
  loginWithToken,
  fetchCart,
  fetchProducts,
  fetchReviews,
  fetchAddresses,
  fetchOrders,
} from "../store";
import { Link, Routes, Route } from "react-router-dom";
import AddProduct from "./AddProduct";
import AddShippingAddress from "./AddShippingAddress";
import CreateAccount from "./CreateAccount";

const App = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginWithToken()).catch((ex) => {
      dispatch(fetchCart());
    });
    dispatch(fetchProducts());
  }, []);

  const prevAuth = useRef({});

  useEffect(() => {
    if (!prevAuth.current.id && auth.id) {
      console.log("logged in");
      dispatch(fetchCart());
      dispatch(fetchProducts());
      dispatch(fetchReviews());
      dispatch(fetchAddresses());
    }
    if (prevAuth.current.id && !auth.id) {
      console.log("logged out");
      dispatch(fetchCart());
    }
  }, [auth]);

  return (
    <div>
      {
        <div>
          <nav>
            <Link to="/">Books</Link>
            <Link to="/cart">Cart</Link>
            {!!auth.id && auth.admin && (
              <Link to="/products/addproduct">Add Product</Link>
            )}
            {!!auth.id && <Link to="/orders">Orders</Link>}
            {!auth.id && <Link to="/login">Login</Link>}
            {!!auth.id && <Link to="/profile">Profile</Link>}
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            {!!auth.id && <Route path="/profile" element={<Profile />} />}
            {!!auth.id && (
              <Route
                path="/profile/addaddress"
                element={<AddShippingAddress />}
              />
            )}
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/products/:id/reviews" element={<Reviews />} />
            {!!auth.id && auth.admin && (
              <Route path="/products/addproduct" element={<AddProduct />} />
            )}
            {!!auth.id && <Route path="/orders" element={<Orders />} />}
            {<Route path="/orders/:id" element={<Order />} />}
            {!auth.id && <Route path="/signup" element={<CreateAccount />} />}
          </Routes>
        </div>
      }
    </div>
  );
};

export default App;
