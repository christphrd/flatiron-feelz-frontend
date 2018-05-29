import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Modal, Card, Button } from 'antd';
import { withRouter } from 'react-router-dom';

import UserFeelingsForm from './UserFeelingsForm';
import DogSpiritSelection from './DogSpiritSelection';
import ImageCapture from './ImageCapture';
// import EmotionStats from './EmotionStats';
import { baseURL } from '../constants';


const dogAPI = `https://random.dog/woof.json?filter=mp4,webm`
// const faceAPI = `https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=true&returnFaceAttributes=age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise`
// const emotionFaceAPI = `https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceAttributes=emotion`

class UserHomePage extends React.Component {
  componentDidMount() {
    this.props.history.push("/home")
  }

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
    })
    this.successfulImgurSaved()
  }

  successfulImgurSaved = () => {
    Modal.success({
      title: 'Congrats',
      content: 'Your selfie is temporarily saved. Good job!',
    });
  }

  //API key expired
  // getFaceStats = () => {
  //
  //   fetch(emotionFaceAPI, {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Ocp-Apim-Subscription-Key': apiKeys.microsoftFaceKey2
  //     },
  //     body: JSON.stringify({"url": this.state.selfie}) //JSON.stringify is important
  //   })
  //   .then(res => res.json())
  //   .then(json => {
  //     if (json[0]) {
  //       this.setState({
  //         ...this.state,
  //         stats: true,
  //         anger: json[0].faceAttributes.emotion.anger,
  //         contempt: json[0].faceAttributes.emotion.contempt,
  //         disgust: json[0].faceAttributes.emotion.disgust,
  //         fear: json[0].faceAttributes.emotion.fear,
  //         happiness: json[0].faceAttributes.emotion.happiness,
  //         neutral: json[0].faceAttributes.emotion.neutral,
  //         sadness: json[0].faceAttributes.emotion.sadness,
  //         surprise: json[0].faceAttributes.emotion.surprise
  //       })
  //     } else {
  //       this.selfieAnalysisError()
  //     }
  //   })
  // }

  selfieAnalysisError = () => {
    Modal.error({
      title: 'Error',
      content: 'Try taking a better selfie. Your face is expressive and awesome!',
    });
  }

  saveFaceData = () => {

    fetch(`${baseURL}api/v1/photos`, {
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
      content: 'Successful sharing of selfie feelz. Congrats!',
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

    fetch(`${baseURL}api/v1/posts`, {
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
        <Card title="Selfie Station" style={{ width: 500 }}>
          <div id="selfie-station">
            <p><ImageCapture saveSelfie={this.saveSelfie}/></p>
            {/* API KEY expired */}
            {/* <p>{this.state.selfie ? <EmotionStats getFaceStats={this.getFaceStats} homeData={this.state}/> : null}</p><br></br> */}
            <p>Analysis Feature No Longer Available due to expired key</p>
            <p>{this.state.selfie ? <Button id="post-selfie-data" alt="selfie-data" onClick={this.saveFaceData}>Share Selfie Stuff</Button> : null}</p><br></br>
          </div>
        </Card>
      </div>,
      <div className="second-column">
        <Card title="Dog Feelz" style={{ width: 500 }}>
          <p><DogSpiritSelection selectDogSpirit={this.selectDogSpirit} dogSpirit={this.state.dogSpirit}/></p>
        </Card><br></br>
        <Card title="Feelz" style={{ width: 500 }}>
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

//For changing URI by using history.push function from withRouter
export default compose(withRouter,
  connect(mapStateToProps, null)
)(UserHomePage)

// export default connect(mapStateToProps, null)(UserHomePage)
