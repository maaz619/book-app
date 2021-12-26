// import { Link } from "react-router-dom"
import "./styles/product.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { Book } from "../../interfaces";
const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const state = useLocation().state as Book;

  const handleQuantityChange = (e) => {
    let currentQuantity = e.target.value;
    setQuantity(currentQuantity);
  };
  console.log(state);
  console.log(quantity);
  return (
    <div className="product">
      <header className="product-header">
        <h1>
          Purchase <span id="product-head-style">details</span>
        </h1>
      </header>
      <main className="product-container">
        <h3 className="product-title">{state.name}</h3>
        <div className="product-exact">
          <img className="product-image" src={state.img_URL} alt="book_image" />
          <div className="product-exact-detail">
            <p id="product-price">
              Qty.{" "}
              <select
                onChange={(e) => handleQuantityChange(e)}
                name="Quantity"
                id="product-quantity"
              >
                {[1, 2, 3, 4, 5].map((i, k) => {
                  return (
                    <option
                      value={i}
                      className="product-quantity-option"
                      key={k}
                    >
                      {i}
                    </option>
                  );
                })}
              </select>
            </p>
            <div>
              <h4>Price</h4>
              <p id="product-price">
                Rs. {quantity < 2 ? state.price : state.price * quantity}. 00
              </p>
            </div>
          </div>
        </div>
        <section className="product-description">
          <header className="product-description-header">
            <h2>Description</h2>
          </header>
          <p style={{ padding: "0 1rem" }}>{state.description}</p>
          <span id="button-center">
            <button className="product-button">Proceed to pay</button>
          </span>
        </section>
      </main>
    </div>
  );
};
export default Product;
