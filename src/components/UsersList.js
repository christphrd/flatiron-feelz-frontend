import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
// import { getUsers } from '../actions/user';
import UserItem from './UserItem'
import ConversationsList from './ConversationsList';
import { baseURL } from '../constants';


// const baseURL = `https://floating-wildwood-28213.herokuapp.com/`
// const baseURL = `http://localhost:3000/`
// const usersURL = `http://localhost:3000/api/v1/users/`

class UsersList extends React.Component {
  state = {
    users: []
  }

  componentDidMount(){
    fetch(`${baseURL}api/v1/users/`)
    .then(response => response.json())
    .then(json => this.setState({
      users: json
    }))
  }

  render(){
    return(
      <div className="third-column">
        <Card title="Anonymous Feelz" bordered={false} style={{ width: 300 }}>
          <ConversationsList/>
        </Card><br></br>
        <Card title="Check the Feelings Circle" bordered={false} style={{ width: 300 }}>
          <div id="user-list">{this.state.users.map(user => <UserItem key={user.id} id={user.id} user={user} goToShow={this.props.goToShow}/>)}</div>
        </Card><br></br>
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
