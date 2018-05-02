import React from 'react';

class EmotionStats extends React.Component {
  render() {
    return (
      <div>
        In EmotionStats component.
        <button id="analyze-selfie" alt="analyze" onClick={this.props.getFaceStats}>Selfie analyze</button>
      </div>
    )
  }
}

export default EmotionStats
