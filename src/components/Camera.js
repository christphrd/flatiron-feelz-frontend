import React from 'react';

const Camera = props => {
  return(
    <div className="camera">
      <video id="video"></video><br></br>
      <button id="startButton" onClick={ props.handleStartClick }>Take Selfie</button>
    </div>
  )
}

export default Camera
