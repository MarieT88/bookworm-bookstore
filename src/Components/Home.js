import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';

const Home = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Home</h1>
      <div>
        <h2>Welcome { auth.username }!!</h2>
        <button onClick={()=> dispatch(logout())}>Logout</button>
      </div>
    </div>
  );
};

export default Home;
