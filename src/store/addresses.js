import axios from "axios";

const addresses = (state = [], action) => {
  if (action.type === "SET_ADDRESSES") {
    return action.addresses;
  }
  if (action.type === "CREATE_ADDRESS") {
    state = [...state, action.address];
  }
  return state;
};

export const fetchAddresses = () => {
  return async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const response = await axios.get("/api/auth/addresses", {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: "SET ADDRESSES", addresses: response.data });
  };
};

export const createAddress = (address) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const response = await axios.post("/api/auth/addresses", address, {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: "CREATE_ADDRESS", address: response.data });
  };
};

export default addresses;
