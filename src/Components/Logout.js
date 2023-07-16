import React, { useState } from "react";
import { logout, clearCart } from "../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const _logout = (ev) => {
    ev.preventDefault();
    dispatch(logout());
    dispatch(clearCart()); 
    navigate("/");
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={_logout}>Log Out</button>
    </div>
  );
};

export default Logout;