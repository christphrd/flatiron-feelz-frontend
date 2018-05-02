import React from 'react';

class SelfieShow extends React.Component {
  render(){
    return(
      <div>
        <h3>Feelings Selfie</h3>
        {this.props.clickedUserData.first_name} has these feelings on a lovable face:<br></br>
        {this.props.clickedUserData.last_post_selfie ? <img id="shared-selfie" alt="shared" src={this.props.clickedUserData.last_post_selfie}/> : null}
      </div>
    )
  }
}

export default SelfieShow
