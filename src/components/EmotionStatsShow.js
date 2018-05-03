import React from 'react';

class EmotionStatsShow extends React.Component {

  render() {
    return (
      <div>
        In EmotionStatsShow component.
          { this.props.clickedUserData.photos.length !== 0 && this.props.clickedUserData.photos.slice(-1)[0].anger ? <div>
            <p>Anger: {this.props.clickedUserData.photos.slice(-1)[0].anger}</p>
            <p>Contempt: {this.props.clickedUserData.photos.slice(-1)[0].contempt}</p>
            <p>Disgust: {this.props.clickedUserData.photos.slice(-1)[0].disgust}</p>
            <p>Fear: {this.props.clickedUserData.photos.slice(-1)[0].fear}</p>
            <p>Happiness: {this.props.clickedUserData.photos.slice(-1)[0].happiness}</p>
            <p>Neutral: {this.props.clickedUserData.photos.slice(-1)[0].neutral}</p>
            <p>Sadness: {this.props.clickedUserData.photos.slice(-1)[0].sadness}</p>
            <p>Surprise: {this.props.clickedUserData.photos.slice(-1)[0].surprise}</p>
          </div> : null }
      </div>
    )
  }
}

export default EmotionStatsShow
