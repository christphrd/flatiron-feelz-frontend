import React from 'react';
import { connect } from 'react-redux';
// import { getUsers } from '../actions/user';
import UserItem from './UserItem'

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
      <div className="third-column">
        <h1>People in the Feelings Circle</h1>
        {this.state.users.map(user => <UserItem key={user.id} id={user.id} user={user} goToShow={this.props.goToShow}/>)}
      </div>
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
