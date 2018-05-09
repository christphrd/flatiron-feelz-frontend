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

  componentDidMount() {
    if (this.props.match.params.id) {

      fetch(usersURL + this.props.match.params.id)
      .then(res => res.json())
      // .then(json => console.log(json))
      .then(json => {
        if (json !== null) {
          this.setState({home: false, clickedUserData: json})
          this.props.history.push(`/users/${this.props.match.params.id}`)
        } else {
          this.props.history.goBack()
        }}
      )
    }
  }

  goToShow = (event) => {
    //Take the id and fetch the user info. then change home state to false so renders userShowPage
    fetch(usersURL + event.target.id)
      .then(res => res.json())
      // .then(json => console.log(json))
      .then(json => this.setState({
        home: false,
        clickedUserData: json
      }))
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
        <NavBar goHome={this.goHome}/>
        <div className="center-text">
          <h1 className="text-on-bg">Hello, {`${this.props.usersReducer.firstName} ${this.props.usersReducer.lastName}`}. How are things?</h1>
          <h3 className="text-on-bg">Feelings can be expressed in many ways. So let us meditate on them.</h3>
          <h3 className="text-on-bg">"We accept the love we think we deserve." -Stephen Chbosky</h3>
        </div>
        {/* <Row>
          <Col span={16}>{this.state.home ? <UserHomePage successfulFeelzSubmit={this.successfulFeelzSubmit}/> : <UserShowPage clickedUserData={this.state.clickedUserData}/>}</Col>
          <Col span={8}><UsersList goToShow={this.goToShow} /></Col>
        </Row> */}
        <div className="container">
          {this.state.home ? <UserHomePage successfulFeelzSubmit={this.successfulFeelzSubmit}/> : <UserShowPage clickedUserData={this.state.clickedUserData}/>}
          <UsersList goToShow={this.goToShow} />
        </div>
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
