import logo from './logo.svg';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My website is up and running!
        </p>
        <a
          className="App-link"
          href="https://mywebsite.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my website      
        </a>

      </header>
    </div>
  );
}

export default App;
