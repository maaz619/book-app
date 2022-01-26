// import { Link } from "react-router-dom"
import { Link } from "react-router-dom";
import "./styles/product.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import React from "react";
import { Book } from "../../interfaces";
import Skeleton from "react-loading-skeleton";
import Modal from "./modal";
import { ReactComponent as Back } from "../images/back.svg";
const Product: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [quantity, setQuantity] = useState(1);
  const [loaded, setLoaded] = useState<boolean>(false);
  const state = useLocation().state as Book;

  const handleQuantityChange = (e) => {
    let currentQuantity = e.target.value;
    setQuantity(currentQuantity);
  };

  const skeletonTimer = () => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  };
  useEffect(() => {
    skeletonTimer();
    clearTimeout();
  }, []);
  // console.log(state);
  // console.log(quantity);
  return (
    <Fragment>
      {openModal && <Modal closeModal={setOpenModal} modal={openModal} />}
      <div className="product">
        <header className="product-header">
          <Link to="/">
            <Back width={35} />
          </Link>
          <p>
            Purchase <span id="product-head-style">details</span>
          </p>
        </header>
        <main className="product-container">
          {loaded ? (
            <h3 className="product-title">{state.name}</h3>
          ) : (
            <h3 className="product-title">
              <Skeleton />
            </h3>
          )}
          <div className="product-exact">
            {loaded ? (
              <div className="product-image">
                <img src={state.img_URL} alt="book_image" />
              </div>
            ) : (
              <div style={{ width: "150px" }} className="product-image">
                <Skeleton height={200} />
              </div>
            )}
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
                {loaded ? (
                  <p id="product-price">
                    Rs. {quantity < 2 ? state.price : state.price * quantity}.
                    00
                  </p>
                ) : (
                  <span className="product-price">
                    <Skeleton />
                  </span>
                )}
              </div>
            </div>
          </div>
          <section className="product-description">
            <header className="product-description-header">
              <h2>Description</h2>
            </header>
            {loaded ? (
              <p style={{ padding: "0 1rem" }}>{state.description}</p>
            ) : (
              <p style={{ padding: "0 1rem" }}>
                <Skeleton count={4} />
              </p>
            )}
            <span id="button-center">
              <button
                onClick={() => setOpenModal(true)}
                className="product-button"
              >
                Proceed
              </button>
            </span>
          </section>
        </main>
      </div>
    </Fragment>
  );
};
export default Product;
