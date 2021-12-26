import { Link } from "react-router-dom";
import "./App.css";
import { bookData, defaults } from "./books";
import { useState, useEffect } from "react";
import Product from "./components/product";
import types from "../interfaces";
import React from "react";

const App: React.FC = (): JSX.Element => {
  const [propsData, setPropsData] = useState({});
  const [bookInfo, setBookInfo] = useState<types<void>[]>([]);
  const [bookType, setBookType] = useState<string>();
  const myData = { ...bookData };

  // const stateToProps = (bookDetails) => {
  //   <Product newData={bookDetails} />;
  //   console.log(bookInfo);
  // };
  const handlePropsData = (i: any) => {
    const current = i;
    setPropsData(current);
  };

  const clickHandler = (type: string) => {
    console.log(type);
    setBookInfo([...myData[type]]);
    setBookType(type);
  };

  useEffect(() => {
    setBookInfo([...defaults.Recommendations]);
    setBookType(Object.keys(defaults)[0]);
    // handlePropsData(propsData);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Good <span className="header-text">read</span>
        </h1>
      </header>
      <div className="buttons">
        {Object.keys(myData).map((type, key) => {
          return (
            <button
              onClick={() => {
                clickHandler(type);
              }}
              key={key}
              className="buttons-type"
            >
              {type}
            </button>
          );
        })}
      </div>
      <main className="book-list-container">
        <ul className="book-list-container">
          <h2
            style={{ textAlign: "start", padding: "1rem" }}
            className="header-text"
          >
            {bookType}
          </h2>
          {bookInfo.map((product, key) => {
            return (
              <li key={key} className="book-details">
                {" "}
                <div className="image-container">
                  <img src={product.Biography.img_URL} alt="" />{" "}
                </div>
                <div className="book-description">
                  <div>
                    <p style={{ fontSize: "largeer", fontWeight: "600" }}>
                      {product.name}
                    </p>
                    <small style={{ padding: "10px 0" }}>{product.auth}</small>
                  </div>
                  <p>
                    <strong>Rating: </strong>
                    <span className="book-rating">{product.rating}</span>
                  </p>

                  <Link to={{ pathname: "/product" }} state={product}>
                    <button
                      onClick={() => {
                        handlePropsData(product);
                      }}
                      className="buy"
                    >
                      Buy
                    </button>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default App;
