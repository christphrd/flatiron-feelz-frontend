import React from 'react';
import UserFeelingsShow from './UserFeelingsShow';
import DogSpiritShow from './DogSpiritShow';

class UserShowPage extends React.Component {
  render() {
    return(
      <div>
        <DogSpiritShow clickedUserData={this.props.clickedUserData}/>
        <UserFeelingsShow clickedUserData={this.props.clickedUserData}/>
      </div>
    )
  }
}

export default UserShowPage
