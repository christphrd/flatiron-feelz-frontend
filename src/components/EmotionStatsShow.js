import React from 'react';
import {Doughnut} from 'react-chartjs-2';

class EmotionStatsShow extends React.Component {
  renderDoughnut = () => {
    let lastFeelStats = this.props.clickedUserData.photos.slice(-1)[0]
    if (lastFeelStats) {

      let data = {
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
          data: [lastFeelStats.anger, lastFeelStats.contempt,lastFeelStats.disgust, lastFeelStats.fear, lastFeelStats.happiness, lastFeelStats.neutral, lastFeelStats.sadness, lastFeelStats.surprise]
        }],
      }
      return <Doughnut data={data}/>
    }
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
          {this.props.clickedUserData.photos.length !== 0 && this.props.clickedUserData.photos.slice(-1)[0].anger ? this.renderDoughnut(): null}
      </div>
    )
  }
}

export default EmotionStatsShow
