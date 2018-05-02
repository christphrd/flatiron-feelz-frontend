import React from 'react';

class EmotionStats extends React.Component {
  // emotion = this.props.stats.emotion

  // renderEmotionList = () => {
  //   return(
  //
  //   )
  // }

  render() {
    return (
      <div>
        In EmotionStats component.
        <button id="analyze-selfie" alt="analyze" onClick={this.props.getFaceStats}>Selfie analyze</button>
        {/* {this.props.stats ? this.props.stats.emotion: null} */}
      </div>
    )
  }
}

export default EmotionStats
