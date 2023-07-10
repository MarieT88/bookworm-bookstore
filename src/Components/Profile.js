import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAuth } from "../store";
import { useNavigate } from "react-router-dom";
import UpdateAccount from "./UpdateAccount";

const Profile = () => {
  const { auth, addresses } = useSelector((state) => state);

  return (
    <div>
      <h1> {auth.username}'s Profile</h1>
      <UpdateAccount />
      <br/>
      <h2>Shipping Addresses</h2>
      <ul>
        {addresses.map((address) => {
          return (
            <li key={address.id}>
              {address.streetAddress}
              {address.apt}
              {address.city}, {address.state} {address.zipCode}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Profile;
