import React from 'react';

const Selfie = props => {

  return (
    <div className="output">
      <img id="selfie"/><br></br>
      <button onClick={props.handleSaveClick}>Save Selfie for Sharing</button>
    </div>
  )
}

export default Selfie
