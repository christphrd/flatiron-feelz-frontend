import React from 'react';

const Camera = props => {
  return(
    <div className="camera">
      <video id="video"></video>
      <button id="startButton" onClick={ props.handleStartClick }>Take photo</button>
    </div>
  )
}

export default Camera
