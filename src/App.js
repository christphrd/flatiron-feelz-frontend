import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm'
import {getCurrentUser} from './actions/user.js'

class App extends Component {

  //using getCurrentUser to check with backend if jwt token is in the frontend. otherwise it would just render the welcome page
  componentDidMount() {
    if (localStorage.getItem('jwt')) {
      this.props.getCurrentUser()
    }
  }

  render() {
    console.log(this.props)
    if (this.props.usersReducer.loggedIn){
      return(<p>Hello. {`${this.props.usersReducer.firstName} ${this.props.usersReducer.lastName}`} got jwt</p>)
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Flatiron Feelz</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            <LoginForm />
            {/* {localStorage.getItem("jwt") ? : <LoginForm />} */}
          </p>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App)

// export default App
