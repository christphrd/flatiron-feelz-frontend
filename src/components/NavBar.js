import React from 'react';
import { connect } from 'react-redux';
import { logOutUser } from '../actions/user';
import { Button } from 'antd';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
  render(){
    return(
      <div className="NavBar">
        <Button onClick={this.props.goHome}><Link to="/home">Home</Link></Button>
        <Button onClick={this.props.logOutUser}><Link to="/welcome">Log Out</Link></Button>
      </div>
    )
  }
}

// export default NavBar

export default connect(null, {logOutUser})(NavBar)
