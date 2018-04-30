import React from 'react';

const Selfie = props => {
  return (
    <div className="output">
      <img id="selfie" alt="Your selfie"/>
      <button id="saveButton" onClick={ props.handleSaveClick } >Save Photo</button>
    </div>
  )
}
export default Selfie
