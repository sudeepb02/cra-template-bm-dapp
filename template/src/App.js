import logo from "./logo.svg";
import "./App.css";
import React, { useContext } from "react";
import { Web3Context } from "./web3";

function App() {
  const { account, connectWeb3, logout } = useContext(Web3Context);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {account == null ? (
          <button onClick={connectWeb3}>Connect Web3</button>
        ) : (
          <div>
            <p>Account: {account}</p>
            <button onClick={logout}>Logout</button>
          </div>
        )}
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
