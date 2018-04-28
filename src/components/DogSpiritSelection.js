import React from 'react';

class DogSpiritSelection extends React.Component {
  render() {
    return (
      <div>
        In DogSpiritSelection component.
        <button onClick={()=> console.log('dog button')}>Fetch a Spirit Dog to rep your Feelz</button>
      </div>
    )
  }
}

export default DogSpiritSelection
