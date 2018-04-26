import React, { Component } from 'react';
import { connect } from 'react-redux';
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
          {/* <LoginForm /> */}
          {localStorage.getItem("jwt") ? <p>Hello.  got jwt</p>: <LoginForm />}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, null)(App)

// export default App
