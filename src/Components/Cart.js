import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, createOrder, addToCart, clearCart } from "../store";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const { cart, auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const lineItems = cart.lineItems;

  const deleteLineItem = async (product) => {
    await dispatch(deleteItem(product));
    navigate("/");
  };

  const createLineItem = async (product) => {
    await dispatch(addToCart(product));
    navigate("/");
  };

  const createOrderFromCart = async (cart) => {
    await dispatch(createOrder(cart));
    dispatch(clearCart());
    navigate("/orders");
  };

  const isCartEmpty = lineItems.length === 0;
  const isLoggedIn = !!auth.id;

  const handleCheckout = () => {
    if (isLoggedIn) {
      createOrderFromCart(cart);
    } else {
      navigate("/login");
    }
  };

   return (
    <div>
      <h2>Cart</h2>
      <ul className="cart">
        {lineItems.map((lineItem, idx) => {
          return lineItem ? (
            <li key={lineItem.id || idx}>
              <span>
                {lineItem.product.title}  ({lineItem.quantity})
              </span>
              <div className="btn-container">
                <button onClick={() => deleteLineItem(lineItem.product)}>
                  -
                </button>
                <button onClick={() => createLineItem(lineItem.product)}>
                  +
                </button>
              </div>
            </li>
          ) : (
            ""
          );
        })}
      </ul>
      {!isCartEmpty && (
        <div>
          {isLoggedIn ? (
              <button onClick={handleCheckout}>Place Order</button>
          ) : (
            <>
              <p>Must be logged in to checkout cart.</p>
              <button onClick={() => navigate("/login")}>Log in</button>
            </>
          )}
        </div>
      )}
      {isCartEmpty && <p>The Cart is Empty.</p>}
    </div>
  );
};

export default Cart;