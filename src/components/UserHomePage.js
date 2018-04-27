import React from 'react';
import { connect } from 'react-redux';
import UserFeelingsForm from './UserFeelingsForm'
import { shareFeeling } from '../actions/feeling'

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

    this.props.shareFeeling(feelingsObject)
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

export default connect(mapStateToProps, {
  shareFeeling
})(UserHomePage)
