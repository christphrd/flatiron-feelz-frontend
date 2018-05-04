import React from 'react';

class DogSpiritSelection extends React.Component {
  render() {
    return (
      <div>
        <h1>Spirit Dog Selection (optional)</h1>
        {this.props.dogSpirit ? <img src={this.props.dogSpirit} alt="Dog Spirit"></img> : null}
        <p><button onClick={this.props.selectDogSpirit}>Fetch a Spirit Dog to rep your Feelz</button></p>
      </div>
    )
  }
}

export default DogSpiritSelection
