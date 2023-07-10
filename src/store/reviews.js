// Purpose: to store reviews in the redux store
import axios from "axios";

const reviews = (state = [], action) => {
  if (action.type === "SET_REVIEWS") {
    return action.reviews;
  }
  if (action.type === "ADD_REVIEW") {
    return [...state, action.review];
  }
  return state;
};

export const fetchReviews = () => {
  return async (dispatch) => {
    const response = await axios.get(`/api/products/reviews`);
    dispatch({ type: "SET_REVIEWS", reviews: response.data });
  };
};

export const addReview = (review) => {
  return async (dispatch) => {
    const response = await axios.post(
      `/api/products/${review.productId}/reviews`,
      review
    );
    dispatch({ type: "ADD_REVIEW", review: response.data });
  };
};

export default reviews;
