import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAddress } from "../store";

const AddShippingAddress = () => {
  const { addresses } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [streetAddress, setStreetAddress] = useState("");
  const [apt, setApt] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState();

  const addShippingAddress = async (ev) => {
    ev.preventDefault();
    await dispatch(createAddress({ streetAddress, apt, city, state, zipCode }));
    navigate("/profile");
  };

  return (
    <div>
      <h2>Add Shipping Address</h2>
      <form onSubmit={addShippingAddress}>
        <label>Street Address</label>
        <input
          value={streetAddress}
          onChange={(ev) => setStreetAddress(ev.target.value)}
        ></input>
        <label>apt</label>
        <input value={apt} onChange={(ev) => setApt(ev.target.value)}></input>
        <label>City</label>
        <input value={city} onChange={(ev) => setCity(ev.target.value)}></input>
        <label>State(ex.NY)</label>
        <input
          value={state}
          onChange={(ev) => setState(ev.target.value)}
        ></input>
        <label>Zip Code</label>
        <input
          value={zipCode}
          onChange={(ev) => setZipCode(ev.target.value)}
        ></input>
        <button>Add Shipping Address</button>
      </form>
    </div>
  );
};

export default AddShippingAddress;
