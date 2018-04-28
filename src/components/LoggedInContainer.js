import React from 'react';
import UsersList from './UsersList';
import UserHomePage from './UserHomePage';
import UserShowPage from './UserShowPage';

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
      }), () => console.log(this.state))
  }

  render(){
    return(
      <div>
        {this.state.home ? <UserHomePage /> : <UserShowPage clickedUserData={this.state.clickedUserData}/>}
        <UsersList goToShow={this.goToShow} />
      </div>
    )
  }
}

export default LoggedInContainer
