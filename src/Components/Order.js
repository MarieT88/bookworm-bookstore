import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams,  } from "react-router-dom";
import { fetchOrders, fetchProducts, fetchCart } from "../store";

const Order = () => {
  const { orders, auth } = useSelector((state) => state);
  const { id } = useParams();
  const dispatch = useDispatch();
  
    useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchProducts());
    dispatch(fetchCart());
  }, [auth]);
  
  const order = orders.find((order) => id === order.id);
  
    if (!order) {
    return <div>Loading...</div>; // Display a loading indicator
  }

  // Check if lineItems are available in the order
  const lineItems = order.lineItems || [];

  return (
    <>
      <h1>Order Id: {order.id}</h1>
      <ul>
        {lineItems.map((lineItem) => {
          return (
            <li key={lineItem.product.id}>
              {lineItem.product.title}
              <ul>
                <li>Quantity: {lineItem.quantity}</li>
                <li>${lineItem.product.price}</li>
                <li>{lineItem.product.imageURL}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Order;
