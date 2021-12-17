import './App.css';
import { data, defaults } from "./books"
import { useState, useEffect } from 'react';

const App = () => {
  const [bookInfo, setBookInfo] = useState([])
  const [bookType, setBookType] = useState()
  const myData = { ...data }
  const clickHandler = (type) => {
    setBookInfo([...myData[type]])
    setBookType(type)
  }
  useEffect(() => {
    setBookInfo([...defaults.Recommendations])
    setBookType(Object.keys(defaults)[0])

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Good <span className='header-text'>read</span></h1>
      </header>
      <div className="buttons">
        {Object.keys(myData).map((i, key) => {
          return <button onClick={() => { clickHandler(i) }} key={key} className="buttons-type">{i}</button>
        })}
      </div>
      <main className="book-list-container">
        <ul className='book-list-container'>
          <h2 style={{ "textAlign": "start", "padding": "1rem" }} className='header-text'>{bookType}</h2>
          {
            bookInfo.map((i, key) => {
              return <li key={key} className='book-details'> <div className="image-container"><img src={i.img_URL} alt="" /> </div>
                <div className="book-description">
                  <div>
                    <p style={{ "fontSize": "largeer", "fontWeight": "600" }}>{i.name}</p>
                    <small style={{ "padding": "10px 0" }}>{i.auth}</small>
                  </div><p><strong>Rating: </strong><span className='book-rating'>{i.rating}</span></p>
                  <button className="buy">Buy</button>
                </div></li>
            })
          }
        </ul>
      </main>
    </div>
  );
}

export default App;
