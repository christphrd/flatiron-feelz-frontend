import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';

const { TextArea } = Input;

class UserFeelingsForm extends React.Component {

  render(){
    return(
      <div>
        <h1>Share Feelings</h1>
        <ul>
          <li>Write your feelz. (required)</li>
          <li>Share and go to your page.</li>
        </ul><p></p>
        <Form onSubmit={this.props.submitFeelings}>
          <TextArea rows={4} cols="50" name="feelings" placeholder="Feelz (required). You can share a =)" onChange={this.props.inputFeelingz}></TextArea><p></p>
          {/* <input type="submit" value="Share all your Feelings & Go See Your Page"/> */}
          <Button size="small" htmlType="submit">Share all your Feelings & Go See Your Page</Button><p></p>
        </Form>
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
