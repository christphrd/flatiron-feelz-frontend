import React from 'react';
import { connect } from 'react-redux';
import { signInUser, signUpUser } from '../actions/user'

// const loginURL = `http://localhost:3000/api/v1/login`
const signUpURL = `http://localhost:3000/api/v1/signup`

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    newEmail: "",
    newPassword: ""
  }

  inputEmail = (event) => {
    this.setState({email: event.target.value})
  }

  inputPassword = (event) => {
    this.setState({password: event.target.value})
  }

  loginSubmit = (event) => {
    event.preventDefault()

    this.props.signInUser(this.state.email, this.state.password)

    // let loginObject = {
    //   email: this.state.email,
    //   password: this.state.password
    // }
    //
    // fetch(loginURL, {
    //   method: 'POST',
    //   body: JSON.stringify(loginObject),
    //   headers: {
    //     'content-type': 'application/json'
    //   }
    // })
    // .then(res => res.json())
    // .then(json => console.log(json))
    //need to do something with the JWT
  }

  inputNewFirstName = (event) => {
    this.setState({firstName: event.target.value})
  }

  inputNewLastName = (event) => {
    this.setState({lastName: event.target.value})
  }

  inputNewEmail = (event) => {
    this.setState({newEmail: event.target.value})
  }

  inputNewPassword = (event) => {
    this.setState({newPassword: event.target.value})
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

    fetch(signUpURL, {
      method: 'POST',
      body: JSON.stringify(signUpObject),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => console.log(json))
    //need to do something with the JWT
  }

  render(){
    return(
      <div>
        <h1>Login</h1>
        <form onSubmit={this.loginSubmit}>
          <input type="text" placeholder="Email" onChange={this.inputEmail}></input>
          <input type="password" placeholder="Password" onChange={this.inputPassword}></input>
          <input type="submit"/>
        </form>
        <h1>Sign Up</h1>
        <form onSubmit={this.signUpSubmit}>
          <input type="text" placeholder="First Name" onChange={this.inputNewFirstName}></input>
          <input type="text" placeholder="Last Name" onChange={this.inputNewLastName}></input>
          <input type="text" placeholder="Email" onChange={this.inputNewEmail}></input>
          <input type="password" placeholder="Password" onChange={this.inputNewPassword}></input>
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
