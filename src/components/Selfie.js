import React from 'react';

const Selfie = props => {

  return (
    <div className="output">
      <img id="selfie" hidden/><p></p>
      <button id="save-selfie-button" onClick={props.handleSaveClick} hidden>Save Selfie for Sharing</button>
    </div>
  )
}

export default Selfie
