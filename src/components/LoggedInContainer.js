import React from 'react';
import UsersList from './UsersList';
import UserHomePage from './UserHomePage';
import UserShowPage from './UserShowPage';

class LoggedInContainer extends React.Component {
  state = {
    home: true,
    clickedUserID: null
  }

  goToShow = (event) => {
    //Take the id and fetch the user info. then change home state to false so renders userShowPage
    this.setState({
      home: false,
      clickedUserID: event.target.id
    })
  }

  render(){
    return(
      <div>
        {this.state.home ? <UserHomePage /> : <UserShowPage clickedUserID={this.state.clickedUserID}/>}
        <UsersList goToShow={this.goToShow} />
      </div>
    )
  }
}

export default LoggedInContainer
