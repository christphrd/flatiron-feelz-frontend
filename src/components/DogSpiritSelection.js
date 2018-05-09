import React from 'react';
import { Button } from 'antd';

class DogSpiritSelection extends React.Component {
  render() {
    return (
      <div>
        <h2>Spirit Dog Selection (optional)</h2>
        Cycle through spirit dogs.<p></p>
        {this.props.dogSpirit ? <img className="dog-image" src={this.props.dogSpirit} alt="Dog Spirit"></img> : null}<p></p>
        <p><Button size="small" onClick={this.props.selectDogSpirit}>Fetch a Spirit Dog to rep your Feelz</Button></p>
      </div>
    )
  }
}

export default DogSpiritSelection
