import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signInUser, signUpUser } from '../actions/user';
import { Form, Icon, Input, Button } from 'antd';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    newEmail: "",
    newPassword: ""
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  loginSubmit = (event) => {
    event.preventDefault()

    this.props.signInUser(this.state.email, this.state.password)
  }

  signUpSubmit = (event) => {
    event.preventDefault()

    let signUpObject = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.newEmail,
      password: this.state.newPassword,
      password_confirmation: this.state.newPassword
    }

    this.props.signUpUser(signUpObject)
  }

  render(){
    console.log(this.props)
    return(
      <div>
        <h1>Login</h1>
        <Form onSubmit={this.loginSubmit} className="login-form">
          <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} name="email" type="text" placeholder="Email" onChange={this.handleChange}></Input>
          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} name="password" type="password" placeholder="Password" onChange={this.handleChange}></Input><br></br>
          <Button type="primary" htmlType="submit">Login</Button>
        </Form>
        <h1>Sign Up</h1>
        <Form onSubmit={this.signUpSubmit} className="sign-up-form">
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} name="firstName" type="text" placeholder="First Name (required)" onChange={this.handleChange}></Input>
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} name="lastName" type="text" placeholder="Last Name (required)" onChange={this.handleChange}></Input>
          <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} name="newEmail" type="text" placeholder="Email (required)" onChange={this.handleChange}></Input>
          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} name="newPassword" type="password" placeholder="Password" onChange={this.handleChange}></Input>
          <Button type="primary" htmlType="submit">Sign Up</Button>
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


export default compose(withRouter,
  connect(mapStateToProps, {
  signInUser,
  signUpUser
}))(LoginForm)

// export default connect(mapStateToProps, {
//   signInUser,
//   signUpUser
// })(LoginForm)
