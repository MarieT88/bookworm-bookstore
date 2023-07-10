import axios from "axios";

const products = (state = [], action) => {
  if (action.type === "SET_PRODUCTS") {
    return action.products;
  }
  if (action.type === "UPDATE_PRODUCT") {
    return state.map((product) => {
      if (product.id === action.product.id) {
        return action.product;
      } else {
        return product;
      }
    });
  }
  if (action.type === "CREATE_PRODUCT") {
    state = [...state, action.product];
  }
  return state;
};

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/products");
    dispatch({ type: "SET_PRODUCTS", products: response.data });
  };
};

export const updateProduct = (product) => {
  return async (dispatch) => {
    const response = await axios.put(`/api/products/${product.id}`, product);
    dispatch({ type: "UPDATE_PRODUCT", product: response.data });
  };
};

export const createProduct = (product) => {
  return async (dispatch) => {
    const response = await axios.post("/api/products", product);
    dispatch({ type: "CREATE_PRODUCT", product: response.data });
  };
};

export default products;
