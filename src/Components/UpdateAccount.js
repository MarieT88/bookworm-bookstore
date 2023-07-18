import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAuth } from "../store";
import { Link, useNavigate } from "react-router-dom";

const UpdateAccount = () => {
  const { auth } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [admin, setIsAdmin] = useState(false);

  const updateUser = async (ev) => {
    ev.preventDefault();

    await dispatch(updateAuth({ username, password, /*admin */}));
    setUsername("");
    setPassword("");
    //setIsAdmin(false);

    navigate("/profile");
  };

  return (
    <div>
      <h2>Update Account</h2>
      <form onSubmit={updateUser}>
        <input
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          placeholder="username"
          name="username"
        />
        <input
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          type="password"
          placeholder="password"
          name="password"
        />

        <button>Update Account</button>
      </form>
      <Link to={"/profile/addaddress"}>Add Shipping Address</Link>
    </div>
  );
};

export default UpdateAccount;


/*
Admin code



        <span>
        <label htmlFor="admin">Become an admin</label>
        <input
          type="checkbox"
          checked={admin}
          onChange={(ev) => setIsAdmin(ev.target.checked)}
        />
        </span>


*/