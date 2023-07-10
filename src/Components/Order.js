import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Order = () => {
  const { orders } = useSelector((state) => state);
  const { id } = useParams();
  const order = orders.find((order) => id === order.id);
  const lineItems = order.lineItems;

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
