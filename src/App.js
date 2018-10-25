import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {getCurrentUser} from './actions/user.js';
import Header from './components/Header';
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
          <Header />
          <Loading />
        </div>
      )
    } else if (this.props.usersReducer.loggedIn){
      return(
        <div>
          <Header />
          <Switch>
            <Route exact path="/home" component={LoggedInContainer}/>
            <Route exact path="/users/:id" component={LoggedInContainer}/>
            <Route path="/" component={LoggedInContainer}/>
          </Switch>
        </div>
      )
    } else {
      return (
          <Header />
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
