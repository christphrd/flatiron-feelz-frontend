import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Flatiron Feelz</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <LoginForm />
          {/* TESTING jwt in local storage: {localStorage.getItem("jwt") ? <p>Hello. You got jwt</p>: <LoginForm />} */}
        </p>
      </div>
    );
  }
}

export default App;
