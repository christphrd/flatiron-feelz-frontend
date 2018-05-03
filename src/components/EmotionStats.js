import React from 'react';

class EmotionStats extends React.Component {
  // emotion = this.props.stats.emotion

  // renderEmotionList = () => {
  //   return(
  //
  //   )
  // }

  render() {
    console.log(this.props.homeData)
    return (
      <div>
        In EmotionStats component.
        <button id="analyze-selfie" alt="analyze" onClick={this.props.getFaceStats}>Selfie analyze</button>
        {this.props.homeData.stats ?
          <div>
            <p>Anger: {this.props.homeData.anger}</p>
            <p>Contempt: {this.props.homeData.contempt}</p>
            <p>Disgust: {this.props.homeData.disgust}</p>
            <p>Fear: {this.props.homeData.fear}</p>
            <p>Happiness: {this.props.homeData.happiness}</p>
            <p>Neutral: {this.props.homeData.neutral}</p>
            <p>Sadness: {this.props.homeData.sadness}</p>
            <p>Surprise: {this.props.homeData.surprise}</p>
          </div>
          : null}
        <p><button id="post-selfie-data" alt="selfie-data" onClick={this.props.saveFaceData}>Selfie Data Save</button></p>
      </div>
    )
  }
}

export default EmotionStats
