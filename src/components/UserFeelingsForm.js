import React from 'react';
import { connect } from 'react-redux';
import { signInUser, signUpUser } from '../actions/user'

class UserFeelingsForm extends React.Component {

  render(){
    console.log(this.props)
    return(
      <div>
        <h1>Share Feelings</h1>
        <form onSubmit={this.props.submitFeelings}>
          <textarea rows="4" cols="50" name="feelings" placeholder="Feelz" onChange={this.props.inputFeelingz}></textarea><br></br>
          <input type="submit" value="Share your Feelings"/>
        </form>
      </div>
    )
  }
}

// export default UserFeelingsForm

const mapStateToProps = state => {
  return {
    ...state.usersReducer
  }
}

export default connect(mapStateToProps, {
  signInUser,
  signUpUser
})(UserFeelingsForm)
