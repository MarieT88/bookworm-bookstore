// src/components/Products.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, fetchReviews } from "../store";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../store/cart";
import SingleProduct from "./SingleProduct";
import SearchBar from "./SearchBar";


const Products = ({}) => {
  const [product, setProduct] = useState(null);
  const { products, reviews } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleClick = (productId) => {
    setProduct(productId);
  };

  // Fetch the list of products when the component mounts.
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchReviews());
  }, []);

  const createLineItem = async (product) => {
    await dispatch(addToCart(product));
    //navigate("/cart");
  };

  //for the searchbar
  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <div>
        <h2>Book Search</h2>
        <p>Search by Title</p>
        <SearchBar
          data={products.map((product) => product.title)}
          onSearch={handleSearch}
        />
        <div>
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <ul>
          {products.map((product) => {
            if (!product) return null;
            return (
              <li key={product.id}>
                <Link to={`/products/${product.id}`} onClick={handleClick}>
                  <img src={product.imageUrl} id="cover-image" />
                </Link>
                <Link to={`/products/${product.id}`} onClick={handleClick}>
                  <p>
                    Click for Rating
                    {/* {reviews.filter((review) => {
                      review.productId === product.id
                    }).map((review) => {
                      return review.rating
                    }).reduce((acc, curr) => {
											console.log(acc);
											acc = acc + curr * 1;
											console.log(acc);
											return acc;
										}, 0) / reviews.filter((review) => {
                      review.productId === product.id
                    }).length}{' '} */}
                    {/* {reviews.filter((review) => {
                      review.productId === product.id
                    }).length}{' '} reviews */}
                  </p>
                </Link>
                <Link to={`/products/${product.id}`} onClick={handleClick}>
                  <h4>{product.title}</h4>
                </Link>
                <p>by: {product.author}</p>
                <p>${product.price}</p>
                <button onClick={() => createLineItem(product)}>
                  Add to Cart
                </button>
                <br />
                <br />
              </li>
            );
          })}
        </ul>
        {product && <SingleProduct productId={product} />}
      </div>
    </div>
  );
};

export default Products;
