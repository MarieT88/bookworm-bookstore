import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../store";
import { Link } from "react-router-dom";

const Orders = () => {
  const { orders, auth } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [auth]);

  return (
    <div>
      <h1>Orders</h1>
      <ul>
        <h2>In-progress</h2>

        {orders.length > 0
          ? orders.map((order) => {
              if (!order.orderStatus) {
                return (
                  <li key={order.id}>
                    <Link to={`/orders/${order.id}`}>{order.id}</Link>
                  </li>
                );
              }
            })
          : "no orders yet!"}
        <h2>Completed</h2>
        {orders.length > 0
          ? orders.map((order) => {
              if (order.orderStatus) {
                return (
                  <li key={order.id}>
                    <Link to={`/orders/${order.id}`}>{order.id}</Link>
                  </li>
                );
              }
            })
          : "no completed orders yet!"}
      </ul>
    </div>
  );
};

export default Orders;
