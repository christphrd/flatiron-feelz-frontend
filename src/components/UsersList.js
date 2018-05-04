import React from 'react';
import { connect } from 'react-redux';
// import { getUsers } from '../actions/user';
import UserItem from './UserItem'
import { Card } from 'antd';

const usersURL = `http://localhost:3000/api/v1/users/`

class UsersList extends React.Component {
  state = {
    users: []
  }

  componentDidMount(){
    fetch(usersURL)
    .then(response => response.json())
    .then(json => this.setState({
      users: json
    }))
  }

  render(){
    return(
      <div className="third-column" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <Card title="The Feelings Circle" bordered={false} style={{ width: 200 }}>
          {this.state.users.map(user => <UserItem key={user.id} id={user.id} user={user} goToShow={this.props.goToShow}/>)}
        </Card>
      </div>
      // {/* <div className="third-column">
      //   <h1>The Feelings Circle</h1>
      //   {this.state.users.map(user => <UserItem key={user.id} id={user.id} user={user} goToShow={this.props.goToShow}/>)}
      // </div> */}
    )
  }
}

// export default UsersList

const mapStateToProps = state => {
  return {
    ...state.usersReducer
  }
}

export default connect(mapStateToProps, null)(UsersList)
