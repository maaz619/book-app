import { Link } from "react-router-dom";
import "../App.css";
import { books } from "../books";
import React, { useState, useEffect } from "react";
import { Book } from "../interfaces";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import { ReactComponent as Hamburger } from "../images/hamburger.svg";
import { ReactComponent as Close } from "../images/close.svg";
import { useAuth } from "../Contexts/AuthContext";

const Home: React.FC = (): JSX.Element => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [bookInfo, setBookInfo] = useState<Book[]>([]);
  const [bookType, setBookType] = useState<string>();
  const [navState, setNavState] = useState<boolean>(false);
  const myData = { ...books };
  const context = useAuth();

  const skeletonTimer = () => {
    setTimeout(() => setLoaded(true), 1000);
  };

  const clickHandler = (type: string) => {
    setBookInfo([...myData[type]]);
    setBookType(type);
    skeletonTimer();
  };

  useEffect(() => {
    skeletonTimer();
    setBookInfo([...books.Recommendations]);
    setBookType(Object.keys(books)[0]);
    // handlePropsData(propsData);
    return clearTimeout();
  }, [context?.currentUser]);
  return (
    <div
      className="App"
      onClick={() => {
        setNavState(false);
      }}
    >
      <header className="App-header">
        <h1>
          Good <span className="header-text">read</span>
        </h1>
        <div
          onClick={(e: React.BaseSyntheticEvent) => e.stopPropagation()}
          className="ham"
        >
          <nav className={navState ? "nav-open" : " nav-close"}>
            <Close
              onClick={() => setNavState(false)}
              className="close"
              width={25}
            />
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="/order">Orders</Link>
              </li>
              <li>
                {context?.currentUser?.email ? (
                  <Link onClick={context.signout} to={""}>
                    Logout
                  </Link>
                ) : (
                  <Link to="/signup">Sign up</Link>
                )}
              </li>
            </ul>
          </nav>
          <div onClick={() => setNavState(true)} className="menu">
            <Hamburger width={45} />
          </div>
        </div>
      </header>

      <main className="book-list-container">
        <div className="buttons">
          {Object.keys(myData).map((type, key) => {
            return type !== "Recommendations" ? (
              <button
                onClick={() => {
                  clickHandler(type);
                }}
                key={key}
                className="buttons-type"
              >
                {type}
              </button>
            ) : null;
          })}
        </div>
        <ul className="book-list-container">
          <h2
            style={{ textAlign: "start", padding: "2rem 1rem 0 1rem" }}
            className="header-text"
          >
            {bookType}
          </h2>
          {bookInfo.map((product, key) => {
            return (
              <li key={key} className="book-details">
                {loaded ? (
                  <div className="image-container">
                    <img src={product.img_URL} alt="" />
                  </div>
                ) : (
                  <div style={{ width: "150px" }} className="image-container">
                    <Skeleton height={200} />
                  </div>
                )}
                <div className="book-description">
                  {loaded ? (
                    <div>
                      <p style={{ fontSize: "larger", fontWeight: "600" }}>
                        {product.name}
                      </p>

                      <small style={{ padding: "10px 0" }}>
                        {product.auth}
                      </small>
                    </div>
                  ) : (
                    <Skeleton width={150} height={50} />
                  )}
                  <p>
                    <strong>Rating: </strong>
                    {loaded ? (
                      <span className="book-rating">{product.rating}</span>
                    ) : (
                      <Skeleton height={25} width={60} />
                    )}
                  </p>

                  <Link to={{ pathname: "/product" }} state={product}>
                    <button className="buy">Buy</button>
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

export default Home;
