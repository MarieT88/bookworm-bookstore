import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import UpdateAccount from "./UpdateAccount";
import Logout from "./Logout";

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
       <Logout />
    </div>
  );
};

export default Profile;
