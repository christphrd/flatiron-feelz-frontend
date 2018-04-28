import React from 'react';

class UserFeelingsShow extends React.Component {
  render(){
    return(
      <div>
        <h3>Shared Feelings</h3>
        {this.props.clickedUserData.first_name} has these feelings:<br></br>
        {this.props.clickedUserData.last_post_feelings}
      </div>
    )
  }
}

export default UserFeelingsShow
