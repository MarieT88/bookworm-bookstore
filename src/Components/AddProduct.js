import React, { useState } from "react";
import { createProduct } from "../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedDate, setPublishedDate] = useState();
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0.0);
  const [imageURL, setImageURL] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const create = async (ev) => {
    ev.preventDefault();
    await dispatch(
      createProduct({
        title,
        author,
        publishedDate,
        genre,
        description,
        price,
        imageURL,
      })
    );
    navigate("/products");
  };
  return (
    <>
      <h1>Create Product</h1>
      <form onSubmit={create}>
        <input
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          placeholder="title"
        ></input>
        <input
          value={author}
          onChange={(ev) => setAuthor(ev.target.value)}
          placeholder="author"
        ></input>
        <input
          value={publishedDate}
          onChange={(ev) => setPublishedDate(ev.target.value)}
          placeholder="published date"
        ></input>
        <input
          value={genre}
          onChange={(ev) => setGenre(ev.target.value)}
          placeholder="genre"
        ></input>
        <input
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
          placeholder="description"
        ></input>
        <input
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
          placeholder="price"
        ></input>
        <input
          value={imageURL}
          onChange={(ev) => setImageURL(ev.target.value)}
          placeholder="imageURL"
        ></input>
        <button>create</button>
      </form>
    </>
  );
};

export default AddProduct;
