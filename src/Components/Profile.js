import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import UpdateAccount from "./UpdateAccount";

const Profile = () => {
  
  const { auth, addresses } = useSelector((state) => state);
  
  const capitalizedUserName = auth.username.charAt(0).toUpperCase() + auth.username.slice(1).toLowerCase();

  return (
    <div>
      <h1> {capitalizedUserName}'s Profile</h1>
      <UpdateAccount />
      <br/>
      <h2>Shipping Addresses</h2>
      <ul>
        {addresses.map((address) => {
          return (
            <li key={address.id}>
              {address.streetAddress} {address.apt} {address.city}, {address.state} {address.zipCode}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Profile;
