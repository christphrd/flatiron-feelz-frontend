import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import LoggedInContainer from './components/LoggedInContainer';
import {getCurrentUser} from './actions/user.js';
import Loading from './components/Loading';

class App extends Component {

  //using getCurrentUser to check with backend if jwt token is in the frontend. otherwise it would just render the welcome page
  componentDidMount() {
    if (localStorage.getItem('jwt')) {
      this.props.getCurrentUser()
    }
  }

  render() {
    console.log(this.props)
    // if (this.props.usersReducer.loading) {
    //   <Loading />
    // } else
    if (this.props.usersReducer.loggedIn){
      return(
        <div>
          Hello. {`${this.props.usersReducer.firstName} ${this.props.usersReducer.lastName}`} got jwt
          <LoggedInContainer />
        </div>)
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Flatiron Feelz</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <LoginForm />
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
