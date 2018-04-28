import React from 'react';

const usersURL = `http://localhost:3000/api/v1/users/`

class UserShowPage extends React.Component {
  render() {
    console.log(this.props)
    return(
      <div>
        {this.props.clickedUserData.first_name} has these feelings:<br></br>
        {this.props.clickedUserData.last_post_feelings}
      </div>
    )
  }
}

export default UserShowPage
