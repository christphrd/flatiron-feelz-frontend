import React from 'react';
import {Doughnut} from 'react-chartjs-2';

class EmotionStats extends React.Component {
  // state = {
  //   feelStats: []
  // }

  // renderDoughnut = () => {
  //   this.setState({
  //     feelStats: [this.props.homeData.anger, this.props.homeData.contempt,this.props.homeData.disgust, this.props.homeData.fear, this.props.homeData.happiness, this.props.homeData.neutral, this.props.homeData.sadness, this.props.homeData.surprise]
  //   })
  // }

  // data = {
  //   labels: ["Anger", "Contempt", "Disgust", "Fear", "Happiness", "Neutral", "Sadness", "Surprise"],
  //   datasets: [{
  //       backgroundColor: [
  //           '#CC0000',
  //           '#A0522D',
  //           '#397D02',
  //           '#BF5FFF',
  //           '#FFFF00',
  //           '#9faeb3',
  //           '#003EFF',
  //           '#ffbac7'
  //       ],
  //       data: [this.props.homeData.anger, this.props.homeData.contempt,this.props.homeData.disgust, this.props.homeData.fear, this.props.homeData.happiness, this.props.homeData.neutral, this.props.homeData.sadness, this.props.homeData.surprise]
  //       // data: this.state.feelStats
  //   }],
  // }

  render() {
    return (
      <div>

        {/* {this.props.homeData.stats ?
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
        <p><button id="post-selfie-data" alt="selfie-data" onClick={this.props.saveFaceData}>Selfie Data Save</button></p> */}
        {this.props.homeData.stats ? <Doughnut data={{
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
              data: [this.props.homeData.anger, this.props.homeData.contempt,this.props.homeData.disgust, this.props.homeData.fear, this.props.homeData.happiness, this.props.homeData.neutral, this.props.homeData.sadness, this.props.homeData.surprise]
          }],
        }}/> : null}
        {/* <p><button id="post-selfie-data" alt="selfie-data" onClick={this.props.saveFaceData}>Share Selfie Stuff</button></p> */}
        <button id="analyze-selfie" alt="analyze" onClick={this.props.getFaceStats}>Analyze Selfie with AI</button>
      </div>
    )
  }
}

export default EmotionStats
