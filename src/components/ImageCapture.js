import React, { Component } from 'react';
import Camera from './Camera';
import Selfie from './Selfie';
import apiKeys from '../apiKeys.js';

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


//ATTEMPT TO UPLOAD TO S3 BUCKET. Testing a library
  handleSaveClick = (event) => {
    event.preventDefault()
    console.log(document.getElementById("selfie"));
    // console.log(event.target.parentNode.children[0].src)
    // let selfieURI = document.getElementById("selfie").src
    // let raw = window.atob(selfieURI.replace(/^data\:image\/\w+\;base64\,/, ''))
    //
    // let fd = new FormData()
    // fd.append("contentType", "image/jpeg");
    // console.log(apiKeys)
    // // console.log(awsAccessKey)
    // fd.append("key", apiKeys.awsAccessKey);
    // fd.append("AWSAccessKeyId", apiKeys.awsAccessKeyID);
    // fd.append("acl", "public-read");
    // // fd.append("policy", policy);
    // // fd.append("signature", signature);
    // fd.append('filename', "");
    // fd.append('file', raw);
    // console.log(fd)

    //TRYING DOM to IMAGE LIBRARY
    // let selfieURI = document.getElementById("selfie")
    // let options = {
    //   quality: 0.95
    // }
    //
    // domtoimage.toJpeg(selfieURI, options).then(function (dataURL){
    //   console.log(dataURL)
    //   debugger
    // })


    //TRYING stackoverflow answer
    // let canvas = document.getElementById("selfie")
    // let image = new Image()
    // image.src = document.getElementById("selfie").src
    //
    // image.onload = function()
    // {
    //    ctx.drawImage(image, 0, 0);
    //     var foo = Canvas2Image.saveAsPNG(canvas);
    // };
    // var img = canvas.toDataURL("image/jpeg");

    //TRY it
    const selfie = document.getElementById('selfie');
    console.log(selfie.src)
  }

  takePicture = () => {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    const video = document.querySelector('video');
    const selfie = document.getElementById('selfie');
    const saveButton = document.getElementById('saveButton') //added. now capable of downloading image as jpeg
    const { width, height } = this.state.constraints.video;

    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);

    const data = canvas.toDataURL('image/jpeg');
    selfie.setAttribute('src', data);

    //now capable of downloading image as jpeg
    saveButton.setAttribute('href', data);
    saveButton.setAttribute('download', Date.now() + "selfie.jpg");
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
