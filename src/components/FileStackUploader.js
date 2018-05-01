import React from 'react';
// import ReactFilestack from 'react-filestack';
import filestack from 'filestack-js';
import apiKeys from '../apiKeys.js';

class FileStackUploader extends React.Component {
  client = filestack.init(apiKeys.fileStackKey);
  openPicker = () => {
    this.client.pick({
      fromSources:["webcam","facebook","instagram","local_file_system","flickr","picasa"],
      accept:["image/*"]
    }).then(function(response) {
      // declare this function to handle response
      // handleFilestack(response);
      console.log(response)
      console.log(response.filesUploaded[0].url)
    });
  }

  //response.filesUploaded[0].url

  //RESPONSE FROM FILESTACK
  //{filesUploaded: Array(1), filesFailed: Array(0)}
  //array element is obj
  /*filename
  :
  "webcam-5/1/2018, 6:08:46 PM.png"
  handle
  :
  "wkEUQfHETaOZB1xo9LDW"
  mimetype
  :
  "image/png"
  originalFile
  :
  name
  :
  "webcam-5/1/2018, 6:08:46 PM.png"
  size
  :
  417872
  type
  :
  "image/png"
  __proto__
  :
  Object
  originalPath
  :
  "webcam-5/1/2018, 6:08:46 PM.png"
  size
  :
  417872
  source
  :
  "local_file_system"
  status
  :
  "Stored"
  uploadId
  :
  "6a57a69ef7921ae20906a4efaa80fb4d"
  url
  :
  "https://cdn.filestackcontent.com/wkEUQfHETaOZB1xo9LDW"*/
  render() {

    return (
      <div className="filestack">
        <h3>WEBCAM SELFIE</h3>
        <button onClick={this.openPicker}>Selfie Upload</button>
      </div>
    );
  }
}

export default FileStackUploader;
