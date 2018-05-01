import React from 'react';

const Selfie = props => {

  return (
    <div className="output">
      <img id="selfie" alt="Your selfie"/>
      <a className="button" id="saveButton">Download Selfie</a>
    </div>
  )
}

export default Selfie
