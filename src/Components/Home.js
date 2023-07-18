import React, { useEffect, useState} from 'react';
import ProductList from "./ProductList";
import Cart from "./Cart";

const Home = ()=> {
  
  return (
    <div className ='home-container' >
      <div className ='cart-container'>
        <Cart />
      </div>
      <div className ='product-list-container'>
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
