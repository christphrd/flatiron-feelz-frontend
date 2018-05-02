import React from 'react';
import { connect } from 'react-redux';
import UserFeelingsForm from './UserFeelingsForm';
import DogSpiritSelection from './DogSpiritSelection';
import ImageCapture from './ImageCapture';
// import FileStackUploader from './FileStackUploader';

const postURL = `http://localhost:3000/api/v1/posts`
const dogAPI = `https://random.dog/woof.json?filter=mp4,webm`

class UserHomePage extends React.Component {
  state = {
    userID: this.props.userID,
    feelings: null,
    dogSpirit: null,
    selfie: null,
  }

  saveSelfie = (json) => {
    console.log("hitting save selfie from user home page parent")
    this.setState({
      ...this.state,
      selfie: json.data.link
    }, () => console.log(this.state))
  }

  selectDogSpirit = (event) => {
    fetch(dogAPI)
    .then(res => res.json())
    .then(json => this.setState({
      ...this.state,
      dogSpirit: json.url
    }))
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
    .then(res => {
      res.ok ? this.props.successfulFeelzSubmit() : window.alert("Unsuccessful sharing of feelz. Please try submitting again.")
    })
  }

  render(){
    return(
      <div>
        <ImageCapture saveSelfie={this.saveSelfie}/>
        {/* <FileStackUploader /> */}
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
