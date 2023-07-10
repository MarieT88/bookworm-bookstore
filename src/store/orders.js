import axios from "axios";

const orders = (state = [], action) => {
  if (action.type === "CREATE_ORDER") {
    return action.order;
  }
  if (action.type === "FETCH_ORDERS") {
    return action.orders;
  }
  return state;
};

export const fetchOrders = () => {
  return async (dispatch, getState) => {
    if (getState().auth.id) {
      const token = window.localStorage.getItem("token");
      const response = await axios.get("/api/orders", {
        headers: {
          authorization: token,
        },
      });
      dispatch({ type: "FETCH_ORDERS", orders: response.data });
    } else {
      dispatch({ type: "FETCH_ORDERS", orders: [] });
    }
  };
};

export const createOrder = (order) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const response = await axios.post("/api/orders", order, {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: "CREATE_ORDER", order: response.data });
  };
};

export default orders;
