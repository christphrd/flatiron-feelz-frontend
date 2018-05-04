import React from 'react';

class SelfieShow extends React.Component {
  render(){
    return(
      <div>
        <h3>Latest Feelings Selfie of {this.props.clickedUserData.first_name} {this.props.clickedUserData.last_name}</h3>
        {this.props.clickedUserData.first_name} has these feelings on a lovable face:<br></br>
        {this.props.clickedUserData.photos.length !== 0 ? <img id="shared-selfie" alt="shared" src={this.props.clickedUserData.photos.slice(-1)[0].selfie}/> : null}
      </div>
    )
  }
}

export default SelfieShow
