import React from 'react';
import { Button } from 'antd';

const Camera = props => {
  return(
    <div className="camera">
      <video id="video"></video><br></br>
      <Button size="small" id="startButton" onClick={ props.handleStartClick }>Take Selfie</Button>
    </div>
  )
}

export default Camera
