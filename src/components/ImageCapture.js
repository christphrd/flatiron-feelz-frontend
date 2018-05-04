import React, { Component } from 'react';
import Camera from './Camera';
import Selfie from './Selfie';
import apiKeys from '../apiKeys.js';
import { Modal, Button } from 'antd';

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


//Upload to Imgur
  handleSaveClick = (event) => {
    event.preventDefault()

    const selfie = document.getElementById('selfie');

    if (!!selfie.alt) {
      //remove scheme, media type(jpeg), base64extension
      let dataFromURI = selfie.src.substring(23)
      // console.log(selfie.src)
      // console.log(dataFromURI)

      const formData = new FormData()
      formData.append('image', dataFromURI)
      formData.append('type', 'base64')

      fetch("https://api.imgur.com/3/image",{
        method: "POST",
        headers: {
          Authorization: 'Client-ID ' + apiKeys.imgurClientID
        },
        body: formData
      })
      .then(res => res.json())
      .then(json => this.props.saveSelfie(json))
    } else {
      this.noSelfieError()
    }
  }

  noSelfieError = () => {
    Modal.error({
      title: 'Error',
      content: 'Please take a selfie first.',
    });
  }

  takePicture = () => {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    const video = document.querySelector('video');
    const selfie = document.getElementById('selfie');
    const saveSelfieButton = document.getElementById('save-selfie-button')
    // const saveButton = document.getElementById('saveButton') //added. now capable of downloading image as jpeg
    const { width, height } = this.state.constraints.video;

    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);

    const data = canvas.toDataURL('image/jpeg');
    selfie.setAttribute('alt', "Your selfie")
    selfie.setAttribute('src', data);
    selfie.removeAttribute('hidden')
    saveSelfieButton.removeAttribute('hidden')

    //now capable of downloading image as jpeg
    // saveButton.setAttribute('href', data);
    // saveButton.setAttribute('download', Date.now() + "selfie.jpg");
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
        <h1>Selfie Station (optional)</h1>
        <Camera handleStartClick={ this.handleStartClick }/>
        <canvas id="canvas" hidden></canvas>
        <Selfie handleSaveClick={this.handleSaveClick}/>
      </div>
    );
  }
}

export default ImageCapture;
