import axios from "axios";

const cart = (state = { lineItems: [] }, action) => {
  if (action.type === "SET_CART") {
    return action.cart;
  }
  // if (action.type === "ADD_TO_CART") {
  //   state = { lineItems: [...state.lineItems, action.lineItems] };
  //   return action.cart ? action.cart : null;
  // }
  // if (action.type === "DELETE_ITEM") {
  //   return action.cart;
  // }
  if (action.type === "CLEAR_CART") {
    return { lineItems: [] };
  }

  return state;
};

const localCart = () => {
  let cart = JSON.parse(window.localStorage.getItem("cart"));
  if (!cart) {
    cart = { lineItems: [] };
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }
  return cart;
};

const localCartToServer = async () => {
  const cart = localCart();
  const lineItems = cart.lineItems;
  for (let i = 0; i < lineItems.length; i++) {
    const { product, quantity } = lineItems[i];
    const token = window.localStorage.getItem("token");
    const response = await axios.post(
      "/api/orders/cart",
      {
        product,
        quantity,
      },
      { headers: { authorization: token } }
    );
  }
  window.localStorage.removeItem("cart");
};

export const fetchCart = () => {
  return async (dispatch, getState) => {
    if (getState().auth.id) {
      await localCartToServer();
      const token = window.localStorage.getItem("token");
      const response = await axios.get("/api/orders/cart", {
        headers: {
          authorization: token,
        },
      });
      dispatch({ type: "SET_CART", cart: response.data });
    } else {
      dispatch({ type: "SET_CART", cart: localCart() });
    }
  };
};

export const addToCart = (product) => {
  const token = window.localStorage.getItem("token");
  return async (dispatch, getState) => {
    if (getState().auth.id) {
      const response = await axios.post(
        "/api/orders/cart",
        { product, quantity: 1 },
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch(fetchCart());
    } else {
      const cart = localCart();
      const lineItem = cart.lineItems.find(
        (lineItem) => lineItem.product.id === product.id
      );
      if (!lineItem) {
        cart.lineItems.push({ product, quantity: 1 });
      } else {
        lineItem.quantity++;
      }
      window.localStorage.setItem("cart", JSON.stringify(cart));
      dispatch(fetchCart());
    }
  };
};

export const deleteItem = (product) => {
  return async (dispatch, getState) => {
    if (getState().auth.id) {
      const token = window.localStorage.getItem("token");
      const response = await axios.put(
        "/api/orders/cart",
        { product, quantityToRemove: 1 },
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch(fetchCart());
    } else {
      const cart = localCart();
      const lineItem = cart.lineItems.find(
        (lineItem) => lineItem.product.id === product.id
      );
      if (lineItem) {
        lineItem.quantity--;
          if (lineItem.quantity === 0) {
            cart.lineItems = cart.lineItems.filter(
              (item) => item.product.id !== product.id
            );
          }
      }
      window.localStorage.setItem("cart", JSON.stringify(cart));
      dispatch(fetchCart());
    }
  };
};

export const clearCart = () => {
  return { type: "CLEAR_CART" };
};


export default cart;
