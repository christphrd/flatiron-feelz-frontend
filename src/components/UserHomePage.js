import React from 'react';
import { connect } from 'react-redux';
import { signInUser, signUpUser } from '../actions/user'

class UserHomePage extends React.Component {
  state = {
    feelings: null
  }

  inputFeelingz = (event) => {
    console.log('typing in textarea for feelignz', event.target.name)
  }

  submitFeelings = (event) => {
    event.preventDefault()

    console.log('clicking submit')
  }

  render(){
    console.log(this.props)
    return(
      <div>
        <h1>Share Feelings</h1>
        <form onSubmit={this.submitFeelings}>
          <textarea rows="4" cols="50" name="feelings" placeholder="Feelz" onChange={this.inputFeelingz}></textarea><br></br>
          <input type="submit" value="Share your Feelings"/>
        </form>
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
  signInUser,
  signUpUser
})(UserHomePage)
