import React from 'react';

const Selfie = props => {

  return (
    <div className="output">
      <img id="selfie"/>
      {}<button onClick={props.handleSaveClick}>Prep for Feelz share Button</button>
      {/* <a className="button" id="saveButton">Download Selfie</a> */}
    </div>
  )
}

export default Selfie
