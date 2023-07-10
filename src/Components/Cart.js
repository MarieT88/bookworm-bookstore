import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, createOrder, addToCart } from "../store";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const lineItems = cart.lineItems;

  const deleteLineItem = async (product) => {
    // const product = lineItem.product;
    // dispatch(deleteItem({ product, quantityToRemove: 1 }));
    await dispatch(deleteItem(product));
    navigate("/cart");
  };

  const createLineItem = async (product) => {
    // console.log("product", product);
    // const product = lineItem.product;
    // await dispatch(addToCart({ product, quantity: 1 }));
    await dispatch(addToCart(product));
    navigate("/cart");
  };

  const createOrderFromCart = async (cart) => {
    await dispatch(createOrder(cart));
    navigate("/orders");
  };

  return (
    <div>
      <h1>Cart</h1>
      {/* I think we can remove this line below */}
      {/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}
      <ul className="cart">
        {lineItems.map((lineItem, idx) => {
          return lineItem ? (
            <li key={lineItem.id || idx}>
              <span>
              {lineItem.product.title} - {lineItem.quantity}
              </span>
              <div className="btn-container">
              <button onClick={() => deleteLineItem(lineItem.product)}>
                remove 1 from cart
              </button>
              <button onClick={() => createLineItem(lineItem.product)}>
                add 1 to cart
              </button>
              </div>
            </li>
          ) : (
            ""
          );
        })}
      </ul>
      <div>
        <button onClick={() => createOrderFromCart(cart)}>Create Order</button>
      </div>
    </div>
  );
};

export default Cart;
