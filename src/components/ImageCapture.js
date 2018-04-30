import React, { Component } from 'react';
import Camera from './Camera';
import Selfie from './Selfie';

class ImageCapture extends Component {
  //image state
  state = {
    constraints: {
      audio: false,
      video: {width: 400, height: 400}
    }
  }

  //video feed up and functional on page load
  componentDidMount(){
    const constraints = this.state.constraints;
    const getUserMedia = (params) => (
      new Promise((successCallback, errorCallback) => {
        navigator.webkitGetUserMedia.call(navigator, params, successCallback, errorCallback);
      })
    );

    getUserMedia(constraints)
    .then((stream) => {
      const video = document.querySelector('video');
      // const vendorURL = window.URL || window.webkitURL;

      // video.src = vendorURL.createObjectURL(stream);
      video.srcObject = stream;
      video.play();
    })
    .catch((err) => {
      console.log(err);
    });

    this.clearPhoto();

  }

  handleStartClick = (event) => {
    event.preventDefault();
    this.takePicture();
  }

  handleSaveClick = (event) => {
    event.preventDefault()
    debugger
  }

  takePicture = () => {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    const video = document.querySelector('video');
    const selfie = document.getElementById('selfie');
    const { width, height } = this.state.constraints.video;

    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);

    const data = canvas.toDataURL('image/png');
    selfie.setAttribute('src', data);
  }

  //sets up the image tag for receiving captured image
  clearPhoto = () => {
    const canvas = document.querySelector('canvas');
    const selfie = document.getElementById('selfie');
    const context = canvas.getContext('2d');
    const { width, height } = this.state.constraints.video;
    context.fillStyle = '#FFF';
    context.fillRect(0, 0, width, height);

    const data = canvas.toDataURL('image/jpeg');
    selfie.setAttribute('src', data);
  }

  render() {
    return (
      <div className="image-capture">
        <Camera handleStartClick={ this.handleStartClick }/>
        <canvas id="canvas" hidden></canvas>
        <Selfie handleSaveClick={this.handleSaveClick}/>
      </div>
    );
  }
}

export default ImageCapture;
