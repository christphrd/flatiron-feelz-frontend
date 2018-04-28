import React from 'react';

class UserItem extends React.Component {
  render(){
    return(
      <div id={this.props.id} onClick={this.props.goToShow}>
        {this.props.user.first_name} {this.props.user.last_name}
      </div>
    )
  }
}

export default UserItem
