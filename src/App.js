import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {getCurrentUser} from './actions/user.js';
import LoginForm from './components/LoginForm';
import LoggedInContainer from './components/LoggedInContainer';
import Loading from './components/Loading';

class App extends Component {

  //using getCurrentUser to check with backend if jwt token is in the frontend. otherwise it would just render the welcome page
  componentDidMount() {
    if (localStorage.getItem('jwt')) {
      this.props.getCurrentUser()
    }
  }

  render() {
    if (this.props.usersReducer.loading) {
      return (
        <div>
          <Loading />
        </div>
      )
    } else if (this.props.usersReducer.loggedIn){
      return(
        <div>
          <LoggedInContainer />
        </div>
      )
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">// Welcome to Flatiron Feelz</h1>
            <p>
              The Blogging Platform for the Flatiron Grad
            </p>
          </header>

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
