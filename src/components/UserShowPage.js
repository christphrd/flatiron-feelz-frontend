import React from 'react';
import UserFeelingsShow from './UserFeelingsShow';
import DogSpiritShow from './DogSpiritShow';
import SelfieShow from './SelfieShow';
import EmotionStatsShow from './EmotionStatsShow';
import { Card } from 'antd';

class UserShowPage extends React.Component {

  render() {
    console.log('mounted show page')
    return(
      [<div className="first-column">
        <Card title={"Latest Feelings Selfie of " + this.props.clickedUserData.first_name + " " + this.props.clickedUserData.last_name} style={{ width: 500 }}>
          <p><SelfieShow clickedUserData={this.props.clickedUserData} /></p>
          <p><EmotionStatsShow clickedUserData={this.props.clickedUserData} /></p>
        </Card>
      </div>,
      <div className="second-column">
        <Card title={"The Latest Feelz of " + this.props.clickedUserData.first_name + " " + this.props.clickedUserData.last_name} style={{ width: 500 }}>
          <p><DogSpiritShow clickedUserData={this.props.clickedUserData}/></p>
          <p><UserFeelingsShow clickedUserData={this.props.clickedUserData}/></p>
        </Card>
      </div>]
    )
  }
}

export default UserShowPage
