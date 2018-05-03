import React from 'react';
import { connect } from 'react-redux';
import {getCurrentUser} from '../actions/user.js';
import UsersList from './UsersList';
import UserHomePage from './UserHomePage';
import UserShowPage from './UserShowPage';
import NavBar from './NavBar';

const usersURL = `http://localhost:3000/api/v1/users/`

class LoggedInContainer extends React.Component {
  state = {
    home: true,
    clickedUserData: null
  }

  goToShow = (event) => {
    //Take the id and fetch the user info. then change home state to false so renders userShowPage
    fetch(usersURL + event.target.id)
      .then(res => res.json())
      .then(json => this.setState({
        home: false,
        clickedUserData: json
      }, () => console.log(this.state)))
  }

  goHome = () => {
    this.setState({
      ...this.state,
      home: true
    })
  }

  successfulFeelzSubmit = () => {
    fetch(usersURL + this.props.usersReducer.userID)
      .then(res => res.json())
      .then(json => this.setState({
        home: false,
        clickedUserData: json
      }, () => console.log(this.state)))
  }

  render(){
    return(
      <div>
        <h1>Hello. {`${this.props.usersReducer.firstName} ${this.props.usersReducer.lastName}`} got jwt</h1>
        <NavBar goHome={this.goHome}/>
        {this.state.home ? <UserHomePage successfulFeelzSubmit={this.successfulFeelzSubmit}/> : <UserShowPage clickedUserData={this.state.clickedUserData}/>}
        <UsersList goToShow={this.goToShow} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, {getCurrentUser})(LoggedInContainer)
// export default LoggedInContainer
