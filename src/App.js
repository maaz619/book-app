import { Link } from "react-router-dom";
import "./App.css";
import { bookData, defaults } from "./books";
import { useState, useEffect } from "react";
import Product from "./components/product";

const App = () => {
  const [propsData, setPropsData] = useState({});
  const [bookInfo, setBookInfo] = useState([]);
  const [bookType, setBookType] = useState();
  const myData = { ...bookData };

  // const stateToProps = (bookDetails) => {
  //   <Product newData={bookDetails} />;
  //   console.log(bookInfo);
  // };
  const handlePropsData = (i) => {
    const current = i;
    setPropsData(current);
  };
  if (Object.keys(propsData).length !== 0) {
    console.log(propsData);
    <Product data="hello" />;
  }

  const clickHandler = (type) => {
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
      {/* <button
        onClick={(e) => {
          handlePropsData();
        }}
      >
        hello
      </button> */}
      <header className="App-header">
        <h1>
          Good <span className="header-text">read</span>
        </h1>
      </header>
      <div className="buttons">
        {Object.keys(myData).map((i, key) => {
          return (
            <button
              onClick={() => {
                clickHandler(i);
              }}
              key={key}
              className="buttons-type"
            >
              {i}
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
          {bookInfo.map((i, key) => {
            return (
              <li key={key} className="book-details">
                {" "}
                <div className="image-container">
                  <img src={i.img_URL} alt="" />{" "}
                </div>
                <div className="book-description">
                  <div>
                    <p style={{ fontSize: "largeer", fontWeight: "600" }}>
                      {i.name}
                    </p>
                    <small style={{ padding: "10px 0" }}>{i.auth}</small>
                  </div>
                  <p>
                    <strong>Rating: </strong>
                    <span className="book-rating">{i.rating}</span>
                  </p>

                  <Link to="product">
                    <button
                      onClick={() => {
                        handlePropsData(i);
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
