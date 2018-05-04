import React from 'react';

class UserFeelingsShow extends React.Component {
  render(){
    return(
      <div>
        <h3>Latest Shared Feelings</h3>
        {this.props.clickedUserData.first_name} has these feelings:<br></br>
        {this.props.clickedUserData.posts.length !== 0 ? this.props.clickedUserData.posts.slice(-1)[0].feelings : null}
      </div>
    )
  }
}

export default UserFeelingsShow
