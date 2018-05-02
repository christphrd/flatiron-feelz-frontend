import React from 'react';
import UserFeelingsShow from './UserFeelingsShow';
import DogSpiritShow from './DogSpiritShow';
import SelfieShow from './SelfieShow';

class UserShowPage extends React.Component {
  render() {
    return(
      <div>
        <SelfieShow clickedUserData={this.props.clickedUserData} />
        <DogSpiritShow clickedUserData={this.props.clickedUserData}/>
        <UserFeelingsShow clickedUserData={this.props.clickedUserData}/>
      </div>
    )
  }
}

export default UserShowPage
