import React from 'react';

const Camera = props => {
  return(
    <div className="camera">
      <ul>
        <li>Take selfie.</li>
        <li>Save the selfie.</li>
        <li>Analyze it.</li>
        <li>Share it. (free feel to skip to this after taking your selfie)</li>
      </ul>
      <video id="video"></video><br></br>
      <button id="startButton" onClick={ props.handleStartClick }>Take Selfie</button>
    </div>
  )
}

export default Camera
