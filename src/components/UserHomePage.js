import React from 'react';
import { connect } from 'react-redux';
import UserFeelingsForm from './UserFeelingsForm';

const postURL = `http://localhost:3000/api/v1/posts`

class UserHomePage extends React.Component {
  state = {
    feelings: null
  }

  inputFeelingz = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitFeelings = (event) => {
    event.preventDefault()

    let feelingsObject = {
      user_id: this.props.userID,
      feelings: this.state.feelings
    }

    fetch(postURL, {
      method: 'POST',
      body: JSON.stringify(feelingsObject),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => console.log(json))
  }

  render(){
    return(
      <div>
        <UserFeelingsForm inputFeelingz={this.inputFeelingz} submitFeelings={this.submitFeelings}/>
      </div>
    )
  }
}

// export default UserHomePage

const mapStateToProps = state => {
  return {
    ...state.usersReducer
  }
}

export default connect(mapStateToProps, null)(UserHomePage)
