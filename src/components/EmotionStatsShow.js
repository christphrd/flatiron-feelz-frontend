import React from 'react';
import {Doughnut} from 'react-chartjs-2';

class EmotionStatsShow extends React.Component {
  lastFeelStats = this.props.clickedUserData.photos.slice(-1)[0]
  data = {
    labels: ["Anger", "Contempt", "Disgust", "Fear", "Happiness", "Neutral", "Sadness", "Surprise"],
    datasets: [{
        backgroundColor: [
            '#CC0000',
            '#A0522D',
            '#397D02',
            '#BF5FFF',
            '#FFFF00',
            '#9faeb3',
            '#003EFF',
            '#ffbac7'
        ],
        data: [this.lastFeelStats.anger, this.lastFeelStats.contempt,this.lastFeelStats.disgust, this.lastFeelStats.fear, this.lastFeelStats.happiness, this.lastFeelStats.neutral, this.lastFeelStats.sadness, this.lastFeelStats.surprise]
    }],
  }

  render() {
    return (
      <div>
          {/* { this.props.clickedUserData.photos.length !== 0 && this.props.clickedUserData.photos.slice(-1)[0].anger ? <div>
            <p>Anger: {this.props.clickedUserData.photos.slice(-1)[0].anger}</p>
            <p>Contempt: {this.props.clickedUserData.photos.slice(-1)[0].contempt}</p>
            <p>Disgust: {this.props.clickedUserData.photos.slice(-1)[0].disgust}</p>
            <p>Fear: {this.props.clickedUserData.photos.slice(-1)[0].fear}</p>
            <p>Happiness: {this.props.clickedUserData.photos.slice(-1)[0].happiness}</p>
            <p>Neutral: {this.props.clickedUserData.photos.slice(-1)[0].neutral}</p>
            <p>Sadness: {this.props.clickedUserData.photos.slice(-1)[0].sadness}</p>
            <p>Surprise: {this.props.clickedUserData.photos.slice(-1)[0].surprise}</p>
          </div> : null } */}
          {this.props.clickedUserData.photos.length !== 0 && this.props.clickedUserData.photos.slice(-1)[0].anger ? <Doughnut data={this.data}/> : null}
      </div>
    )
  }
}

export default EmotionStatsShow
