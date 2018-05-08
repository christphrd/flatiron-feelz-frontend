import React from 'react';

class DogSpiritShow extends React.Component {

  render(){
    return(
      <div>
        <h3>Latest Dog Spirit of the one and only {this.props.clickedUserData.first_name} {this.props.clickedUserData.last_name}</h3>
        {this.props.clickedUserData.posts.length !== 0 && this.props.clickedUserData.posts.slice(-1)[0].dog_spirit ? <img className="dog-image" src={this.props.clickedUserData.posts.slice(-1)[0].dog_spirit} alt="Dog Spirit"></img> : null}
      </div>
    )
  }
}

export default DogSpiritShow
