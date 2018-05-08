import React from 'react';
import { Link } from 'react-router-dom';

class UserItem extends React.Component {
  render(){
    return(
      // <div className="go-to-user" id={this.props.id} onClick={this.props.goToShow}>
      //   {this.props.user.first_name} {this.props.user.last_name}
      // </div>
      <Link to={`/users/${this.props.id}`} className="go-to-user" key={this.props.id} id={this.props.id} onClick={this.props.goToShow}>
        {this.props.user.first_name} {this.props.user.last_name}<br></br>
      </Link>
    )
  }
}

export default UserItem
