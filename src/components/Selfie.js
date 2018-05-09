import React from 'react';
import { Button } from 'antd';

const Selfie = props => {

  return (
    <div className="output">
      <img id="selfie" hidden/><p></p>
      <Button size="small" id="save-selfie-button" onClick={props.handleSaveClick} hidden>Save Selfie for Sharing</Button>
    </div>
  )
}

export default Selfie
