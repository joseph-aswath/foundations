import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main-heading">
        <h1 >FOUNDATIONS</h1>
        </div>

        <div className="listOfConcepts">
        <ol>
          <li>navigation bar horizontal</li>
          <li>routing</li>
          <li>components partitioning</li>
          <li>http methods : post,put,delete,get</li>
          <li>connecting to a backend</li>
          <li>backend to database</li>
          <li>forms</li>
          <li>mobile friendly</li>
          <li>JSON manipulation</li>
          <li>bundling & production</li>
        </ol>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
