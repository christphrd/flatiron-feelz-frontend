import React from 'react';

const usersURL = `http://localhost:3000/api/v1/users/`

class UserShowPage extends React.Component {
  state = {
    clickedUserID: this.props.clickedUserID,
    clickedUserEmail: null,
    clickedUserFirstName: null,
    clickedUserLastName: null,
    clickedUserLastFeelings: null
  }

  componentDidMount(){
    fetch(usersURL + this.props.clickedUserID)
      .then(res => res.json())
      .then(json => this.setState({
        clickedUserID: json.id,
        clickedUserEmail: json.email,
        clickedUserFirstName: json.first_name,
        clickedUserLastName: json.last_name,
        clickedUserLastFeelings: json.last_post_feelings
      }), () => console.log(this.state))
  }

  render() {
    console.log(this.props.clickedUserID)
    return(
      <div>
        I'm in UserShowPage<br></br>
        {this.state.clickedUserFirstName} {this.state.clickedUserLastName}
      </div>
    )
  }
}

export default UserShowPage
