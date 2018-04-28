import React from 'react';

class DogSpiritSelection extends React.Component {
  render() {
    return (
      <div>
        In DogSpiritSelection component.
        {this.props.dogSpirit ? <img src={this.props.dogSpirit} alt="Dog Spirit"></img> : null}
        <button onClick={this.props.selectDogSpirit}>Fetch a Spirit Dog to rep your Feelz</button>
      </div>
    )
  }
}

export default DogSpiritSelection
