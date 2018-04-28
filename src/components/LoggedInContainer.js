import React from 'react';
import UsersList from './UsersList';
import UserHomePage from './UserHomePage';

class LoggedInContainer extends React.Component {
  render(){
    return(
      <div>
        <UserHomePage />
        <UsersList />
      </div>
    )
  }
}

export default LoggedInContainer
