import React from 'react';

class DogSpiritShow extends React.Component {
  render(){
    return(
      <div>
        <h3>Dog Spirit of the Feelings of the one and only {this.props.clickedUserData.first_name}</h3>
        {this.props.clickedUserData.last_post_dog_spirit ? <img src={this.props.clickedUserData.last_post_dog_spirit} alt="Dog Spirit"></img> : null}
      </div>
    )
  }
}

export default DogSpiritShow
