import React from 'react';
import UserFeelingsShow from './UserFeelingsShow';
import DogSpiritShow from './DogSpiritShow';
import SelfieShow from './SelfieShow';
import EmotionStatsShow from './EmotionStatsShow';

class UserShowPage extends React.Component {
  render() {
    return(
      [<div className="first-column">
        <SelfieShow clickedUserData={this.props.clickedUserData} />
        {/* <EmotionStatsShow clickedUserData={this.props.clickedUserData} /> */}
        { !this.props.clickedUserData.photos.anger ? <EmotionStatsShow clickedUserData={this.props.clickedUserData} /> : null}
      </div>,
      <div className="second-column">
        <DogSpiritShow clickedUserData={this.props.clickedUserData}/>
        <UserFeelingsShow clickedUserData={this.props.clickedUserData}/>
      </div>]
    )
  }
}

export default UserShowPage
