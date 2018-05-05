import React from 'react';
import { connect } from 'react-redux';
import UserFeelingsForm from './UserFeelingsForm';
import DogSpiritSelection from './DogSpiritSelection';
import ImageCapture from './ImageCapture';
import EmotionStats from './EmotionStats';
import apiKeys from '../apiKeys';
import { Modal, Button } from 'antd';
import { Card } from 'antd';

const postURL = `http://localhost:3000/api/v1/posts`
const selfieURL = `http://localhost:3000/api/v1/photos`
const dogAPI = `https://random.dog/woof.json?filter=mp4,webm`
// const faceAPI = `https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=true&returnFaceAttributes=age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise`
const emotionFaceAPI = `https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceAttributes=emotion`

class UserHomePage extends React.Component {
  state = {
    userID: this.props.userID,
    feelings: null,
    dogSpirit: null,
    selfie: null,
    stats: false,
    anger: null,
    contempt: null,
    disgust: null,
    fear: null,
    happiness: null,
    neutral: null,
    sadness: null,
    surprise: null
  }

  saveSelfie = (json) => {
    this.setState({
      ...this.state,
      selfie: json.data.link
    }, () => console.log(this.state))
    this.successfulImgurSaved()
  }

  successfulImgurSaved = () => {
    Modal.success({
      title: 'Congrats',
      content: 'Your selfie is temporarily saved. Good job!',
    });
  }

  getFaceStats = () => {
    console.log("get stats from Microsoft Face API with this func in UserHomePage")

    fetch(emotionFaceAPI, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': apiKeys.microsoftFaceKey2
      },
      body: JSON.stringify({"url": this.state.selfie}) //JSON.stringify is important
    })
    .then(res => res.json())
    // .then(json => this.setState({
    //   ...this.state,
    //   //stats: json[0].faceAttributes //Stats is an obj with emotion as a key
    //   stats: true,
    //   anger: json[0].faceAttributes.emotion.anger,
    //   contempt: json[0].faceAttributes.emotion.contempt,
    //   disgust: json[0].faceAttributes.emotion.disgust,
    //   fear: json[0].faceAttributes.emotion.fear,
    //   happiness: json[0].faceAttributes.emotion.happiness,
    //   neutral: json[0].faceAttributes.emotion.neutral,
    //   sadness: json[0].faceAttributes.emotion.sadness,
    //   surprise: json[0].faceAttributes.emotion.surprise
    // }, () => console.log(this.state)))
    // .then(json => this.setState({
    //   ...this.state,
    //   //stats: json[0].faceAttributes //Stats is an obj with emotion as a key
    //   stats: true,
    //   anger: json[0].faceAttributes.emotion.anger,
    //   contempt: json[0].faceAttributes.emotion.contempt,
    //   disgust: json[0].faceAttributes.emotion.disgust,
    //   fear: json[0].faceAttributes.emotion.fear,
    //   happiness: json[0].faceAttributes.emotion.happiness,
    //   neutral: json[0].faceAttributes.emotion.neutral,
    //   sadness: json[0].faceAttributes.emotion.sadness,
    //   surprise: json[0].faceAttributes.emotion.surprise
    // }, () => console.log(this.state)))
    .then(json => {
      if (json[0]) {
        this.setState({
          ...this.state,
          //stats: json[0].faceAttributes //Stats is an obj with emotion as a key
          stats: true,
          anger: json[0].faceAttributes.emotion.anger,
          contempt: json[0].faceAttributes.emotion.contempt,
          disgust: json[0].faceAttributes.emotion.disgust,
          fear: json[0].faceAttributes.emotion.fear,
          happiness: json[0].faceAttributes.emotion.happiness,
          neutral: json[0].faceAttributes.emotion.neutral,
          sadness: json[0].faceAttributes.emotion.sadness,
          surprise: json[0].faceAttributes.emotion.surprise
        }, () => console.log(this.state))
      } else {
        this.selfieAnalysisError()
      }
    })
  }

  selfieAnalysisError = () => {
    Modal.error({
      title: 'Error',
      content: 'Try taking a better selfie. Your face is expressive and awesome!',
    });
  }

  saveFaceData = () => {
    console.log('in savedata function from userhomepage. try to post this to rails')

    fetch(selfieURL, {
      method: 'POST',
      body: JSON.stringify({
        user_id: this.state.userID,
        selfie: this.state.selfie,
        anger: this.state.anger,
        contempt: this.state.contempt,
        disgust: this.state.disgust,
        fear: this.state.fear,
        happiness: this.state.happiness,
        neutral: this.state.neutral,
        sadness: this.state.sadness,
        surprise: this.state.surprise
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      res.ok ? this.successfulSelfieSave() : this.selfieSaveError()
    })
  }

  successfulSelfieSave = () => {
    Modal.success({
      title: 'Success',
      content: 'Successful sharing of selfie feelz even if it is nothing. Congrats!',
    });
  }

  selfieSaveError = () => {
    Modal.error({
      title: 'Error',
      content: 'Unsuccessful sharing of selfie feelz. Please try submitting again.',
    });
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
        dog_spirit: this.state.dogSpirit,
        // selfie: this.state.selfie,
        // stats: this.state.stats
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      res.ok ? this.props.successfulFeelzSubmit() : this.unsuccessfulFeelzSubmitError()
    })
  }

  unsuccessfulFeelzSubmitError = () => {
    Modal.error({
      title: 'Error',
      content: 'Unsuccessful sharing of feelz. Please try submitting again.',
    });
  }

  render(){
    return(
      // <div className="first-column">
      //   <ImageCapture saveSelfie={this.saveSelfie}/>
      //   {this.state.selfie ? <EmotionStats getFaceStats={this.getFaceStats} homeData={this.state}/> : null}
      //   <p><button id="post-selfie-data" alt="selfie-data" onClick={this.saveFaceData}>Share Selfie Stuff</button></p>
      // </div>
      [<div className="first-column">
        <Card title="Selfie Station (optional)" style={{ width: 500 }}>
          <p><ImageCapture saveSelfie={this.saveSelfie}/></p>
          <p>{this.state.selfie ? <EmotionStats getFaceStats={this.getFaceStats} homeData={this.state}/> : null}</p><br></br>
          <p><button id="post-selfie-data" alt="selfie-data" onClick={this.saveFaceData}>Share Selfie Stuff</button></p>
        </Card>
      </div>,
      <div className="second-column">
        <Card title="Feelz" style={{ width: 500 }}>
          <p><DogSpiritSelection selectDogSpirit={this.selectDogSpirit} dogSpirit={this.state.dogSpirit}/></p>
          <p><UserFeelingsForm inputFeelingz={this.inputFeelingz} submitFeelings={this.submitFeelings}/></p>
        </Card>
      </div>]
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

//{userID: 13, feelings: "Test", dogSpirit: "https://random.dog/6129aa24-e224-4f7b-8058-e33cca8bfab0.JPG", selfie: "https://i.imgur.com/z5akVOJ.jpg", stats: {emotion: {
            //     anger: 0.575,
            //     contempt: 0,
            //     disgust: 0.006,
            //     fear: 0.008,
            //     happiness: 0.394,
            //     neutral: 0.013,
            //     sadness: 0,
            //     surprise: 0.004
            // }}
//stats: {emotion: {anger: 0, contempt: 0, disgust: 0, fear: 0, happiness: 0}}
