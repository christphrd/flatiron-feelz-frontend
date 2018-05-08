import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {getCurrentUser} from './actions/user.js';
import LoginForm from './components/LoginForm';
import LoggedInContainer from './components/LoggedInContainer';
import Loading from './components/Loading';
import { Route, Switch } from 'react-router-dom';

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
          <header className="App-header">
            <h1 className="App-title">// Welcome to Flatiron Feelz</h1>
            <p>
              The Blogging Platform for the Flatiron Grad | Feelings Friday on the go
            </p>
          </header>
          <Loading />
        </div>
      )
    } else if (this.props.usersReducer.loggedIn){
      return(
        <div>
          <header className="App-header">
            <h1 className="App-title">// Welcome to Flatiron Feelz</h1>
            <p>
              The Blogging Platform for the Flatiron Grad | Feelings Friday on the go
            </p>
          </header>
          {/* <LoggedInContainer /> */}
          <Switch>
            <Route exact path="/home" component={LoggedInContainer}/>
            <Route exact path="/users/:id" component={LoggedInContainer}/>
            <Route path="/" component={LoggedInContainer}/>
          </Switch>
        </div>
      )
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">// Welcome to Flatiron Feelz</h1>
            <p>
              The Blogging Platform for the Flatiron Grad | Feelings Friday on the go
            </p>
          </header>

          {/* <LoginForm /> */}
          <Switch>
            <Route exact path="/welcome" component={LoginForm}/>
            <Route path="/" component={LoginForm}/>
          </Switch>
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
