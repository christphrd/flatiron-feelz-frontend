import React from 'react';
import { connect } from 'react-redux';
import { signInUser, signUpUser } from '../actions/user';

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
    return(
      <div>
        <h1>Login</h1>
        <form onSubmit={this.loginSubmit}>
          <input name="email" type="text" placeholder="Email" onChange={this.handleChange}></input>
          <input name="password" type="password" placeholder="Password" onChange={this.handleChange}></input>
          <input type="submit"/>
        </form>
        <h1>Sign Up</h1>
        <form onSubmit={this.signUpSubmit}>
          <input name="firstName" type="text" placeholder="First Name (required)" onChange={this.handleChange}></input>
          <input name="lastName" type="text" placeholder="Last Name (required)" onChange={this.handleChange}></input>
          <input name="newEmail" type="text" placeholder="Email (unique & required)" onChange={this.handleChange}></input>
          <input name="newPassword" type="password" placeholder="Password" onChange={this.handleChange}></input>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

// export default LoginForm

const mapStateToProps = state => {
  return {
    ...state.usersReducer
  }
}

export default connect(mapStateToProps, {
  signInUser,
  signUpUser
})(LoginForm)
