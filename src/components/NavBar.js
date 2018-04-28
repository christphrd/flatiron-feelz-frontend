import React from 'react';
import { connect } from 'react-redux';
import { logOutUser } from '../actions/user';

class NavBar extends React.Component {
  render(){
    return(
      <div>
        Hi I'm the NavBar component. I only have two purposes in my existence: (1)take you home and (2)log you out.<br></br>
        <button onClick={this.props.goHome}>Home</button>
        <button onClick={this.props.logOutUser}>Log Out</button>
      </div>
    )
  }
}

// export default NavBar

export default connect(null, {logOutUser})(NavBar)
