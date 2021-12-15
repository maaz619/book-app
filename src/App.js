import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Good <span className='header-text'>read</span></h1>
      </header>
      <div className="buttons">
        <button className="buttons-type">Programming</button>
        <button className="buttons-type">Biography</button>
        <button className="buttons-type">Fictional</button>
        <button className="buttons-type">Comics</button>
      </div>
      <main className="book-list-container">
        <ul>
          <h1 style={{ "textAlign": "start", "padding": "1rem" }} className='header-text'>Programming</h1>
          <li className='book-details'><h2>book name</h2></li>
          <li className='book-details'><h2>book name</h2></li>
          <li className='book-details'><h2>book name</h2></li>
          <li className='book-details'><h2>book name</h2></li>
        </ul>
      </main>
    </div>
  );
}

export default App;
