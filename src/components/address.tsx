import React from "react";
import "./styles/address.css";
import { AddressProps } from "../interfaces";

const Address: React.FC<AddressProps> = ({ closeModal1 }): JSX.Element => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    closeModal1(false);
    console.log("hello");
  };

  return (
    <div className="address">
      <header>
        <h2>Address</h2>
      </header>
      <form
        style={{ height: "100%", display: "block" }}
        onSubmit={(e) => handleSubmit(e)}
        action="submit"
      >
        <div className="address-container">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" required />
          <label htmlFor="phone">Phone number</label>
          <input id="phone" type="tel" required />
          <label htmlFor="email">Email</label>
          <input id="email" type="email" required />
          <label htmlFor="address">Address</label>
          <input id="address" type="text" required />
          <label htmlFor="landmark">Landmark</label>
          <input id="landmark" type="text" required />
        </div>
        <button className="btn">Proceed to pay</button>
      </form>
    </div>
  );
};

export default Address;
