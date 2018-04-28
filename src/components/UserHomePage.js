import React from 'react';
import { connect } from 'react-redux';
import UserFeelingsForm from './UserFeelingsForm';
import DogSpiritSelection from './DogSpiritSelection';

const postURL = `http://localhost:3000/api/v1/posts`
const dogAPI = `https://random.dog/woof.json?filter=mp4,webm`

class UserHomePage extends React.Component {
  state = {
    userID: this.props.userID,
    feelings: null,
    dogSpirit: null
  }

  selectDogSpirit = (event) => {
    console.log('officially the userhomepage comp. passed into dogspiritselection ', event.target)

    fetch(dogAPI)
    .then(res => res.json())
    .then(json => this.setState({
      ...this.state,
      dogSpirit: json.url
    }, () => console.log(this.state.dogSpirit)))
  }

  inputFeelingz = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  submitFeelings = (event) => {
    event.preventDefault()

    fetch(postURL, {
      method: 'POST',
      body: JSON.stringify({
        user_id: this.state.userID,
        feelings: this.state.feelings,
        dog_spirit: this.state.dogSpirit
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
  }

  render(){
    return(
      <div>
        <DogSpiritSelection selectDogSpirit={this.selectDogSpirit} dogSpirit={this.state.dogSpirit}/>
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
