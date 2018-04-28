import React from 'react';

class UserShowPage extends React.Component {
  render() {
    console.log(typeof(Number(this.props.clickedUserID)))
    return(
      <div>
        I'm in UserShowPage
      </div>
    )
  }
}

export default UserShowPage
