import React from 'react';

const UserItem = (props) => {
  return(
    <div id={props.id} onClick={props.goToShow}>
      {props.user.first_name} {props.user.last_name}
    </div>
  )
}

export default UserItem
