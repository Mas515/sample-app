import evie from './evie.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={evie} className="App-logo" alt="logo" />
        <p>
          Hello Hack-HER-thon!
        </p>
        <a
          className="App-link"
          href="https://devcenter.heroku.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Heroku Docs
        </a>
      </header>
    </div>
  );
}

export default App;
