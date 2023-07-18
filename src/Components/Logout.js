/* import React from "react";
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
*/
import React from "react";
import { useDispatch } from "react-redux";
import { logout, clearCart } from "../store";
import { useNavigate, Link} from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (ev) => {
    ev.preventDefault();
    dispatch(logout());
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <Link to="/" onClick={handleLogout}>
      Logout
    </Link>
  );
};

export default Logout;