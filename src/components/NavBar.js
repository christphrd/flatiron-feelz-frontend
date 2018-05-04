import React from 'react';
import { connect } from 'react-redux';
import { logOutUser } from '../actions/user';
import { Button } from 'antd';

class NavBar extends React.Component {
  render(){
    return(
      <div className="NavBar">
        <Button onClick={this.props.goHome}>Home</Button>
        <Button onClick={this.props.logOutUser}>Log Out</Button>
      </div>
    )
  }
}

// export default NavBar

export default connect(null, {logOutUser})(NavBar)
