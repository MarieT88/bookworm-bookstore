import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../store/reviews";
import { useParams } from "react-router-dom";

const ReviewForm = ({ productId }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [content, setContent] = useState("");
  const { auth } = useSelector((state) => state);

  const create = async (ev) => {
    ev.preventDefault();
    const review = {
      title,
      productId: id,
      userId: auth.id,
      rating,
      content,
    };
    await dispatch(addReview(review));
    setTitle("");
    setRating("");
    setContent("");
  };

  return (
    <form onSubmit={create}>
      <hr />
      <h3>Write a Review</h3>
      <label htmlFor="rating">Overall Rating</label>
      <select
        name="rating"
        value={rating}
        onChange={(event) => setRating(event.target.value)}
      >
        <option value="">--Select--</option>
        <option value="0">0 stars</option>
        <option value="1">1 star</option>
        <option value="2">2 stars</option>
        <option value="3">3 stars</option>
        <option value="4">4 stars</option>
        <option value="5">5 stars</option>
      </select>
      <label htmlFor="title">Add a Headline</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="What's important to know?"
      />
      <label htmlFor="review">Write your review</label>
      <textarea
        id="review"
        name="review"
        rows="10"
        cols="50"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        placeholder="What did you like or dislike about this book?"
      />

      <button type="submit">Submit</button>
      <hr />
    </form>
  );
};

export default ReviewForm;
