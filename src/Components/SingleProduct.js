// this component will display a single product
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cart';
import Reviews from './Reviews.js';
import ReviewForm from './ReviewForm';
import { updateProduct } from '../store';

const SingleProduct = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const { products, reviews, auth } = useSelector((state) => state);
	const [avgRating, setAvgRating] = useState('')

	const product = products.find((product) => product.id === id);

	if (!product) {
		return null;
	}

	// only show reviews for the product that is currently being viewed
	const productReviews = reviews.filter(
		(review) => review.productId === product.id
	);
	const ratings = productReviews.map((productReview) => productReview.rating);

	const _avgRating =
		ratings?.reduce((acc, curr) => {
			console.log(acc);
			acc = acc + curr * 1;
			console.log(acc);
			return acc;
		}, 0) / productReviews?.length;


	// Find the review for this product that has been approved.

	const review = reviews.find(
		(review) => review.productId === product.id && review.status === 'PENDING'
	);

	const createLineItem = async (product) => {
		// await dispatch(addToCart({ product, quantity: 1 }));
		await dispatch(addToCart(product));
		navigate("/");
	  };

	return (
		<div>
		  <br />
		  <img src={product.imageUrl} alt={product.title} id="product_image" />
		  <h3>{product.title}</h3>
		  <p>{product.author}</p>
		  <p>
		  Rating:
				{_avgRating}({productReviews?.length} reviews)
		  </p>
		  <p>{product.description}</p>
		  <p>${product.price}</p>
		  <button onClick={() => createLineItem(product)}>Add to Cart</button>
		  <br />
		  <Reviews product={product} />
		  {auth.id && <ReviewForm />}
		</div>
	  );


};

export default SingleProduct;
