import React from 'react';
import { connect } from 'react-redux';

class UserFeelingsForm extends React.Component {

  render(){
    return(
      <div>
        <h1>Share Feelings</h1>
        <form onSubmit={this.props.submitFeelings}>
          <textarea rows="4" cols="50" name="feelings" placeholder="Feelz (required). You can share a =)" onChange={this.props.inputFeelingz}></textarea><br></br>
          <input type="submit" value="Share all your Feelings & Go See Your Page"/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.usersReducer
  }
}

export default connect(mapStateToProps, null)(UserFeelingsForm)
