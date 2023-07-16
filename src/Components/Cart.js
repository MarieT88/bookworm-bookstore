/*import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, createOrder, addToCart, clearCart } from "../store";
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
    dispatch(clearCart());
    navigate("/orders");
  };
  
  const isCartEmpty = lineItems.length === 0;

  return (
    <div>
      <h1>Cart</h1>
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
        <button 
          onClick={() => createOrderFromCart(cart)}
        >
          Create Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
*/


/*
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
    await dispatch(deleteItem(product));
    navigate("/cart");
  };

  const createLineItem = async (product) => {
    await dispatch(addToCart(product));
    navigate("/cart");
  };

  const createOrderFromCart = async (cart) => {
    await dispatch(createOrder(cart));
    navigate("/orders");
  };
  
  const isCartEmpty = lineItems.length === 0;

  return (
    <div>
      <h1>Cart</h1>
      {isCartEmpty ? (
        <p>Add items to the cart to create an order.</p>
      ) : (
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
      )}
      <div>
        {!isCartEmpty && (
          <button 
            onClick={() => createOrderFromCart(cart)}
          >
            Create Order
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
*/


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
    navigate("/cart");
  };

  const createLineItem = async (product) => {
    await dispatch(addToCart(product));
    navigate("/cart");
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

  /*return (
    <div>
      <h1>Cart</h1>
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
        {!isCartEmpty && (
          <div>
            {isLoggedIn ? (
              <button onClick={handleCheckout}>Create Order</button>
            ) : (
              <>
                <p>Must be logged in to checkout cart.</p>
                <button onClick={() => navigate("/login")}>Log in</button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );*/
  
  
   return (
    <div>
      <h1>Cart</h1>
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
      {!isCartEmpty && (
        <div>
          {isLoggedIn ? (
            <button onClick={handleCheckout}>Create Order</button>
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