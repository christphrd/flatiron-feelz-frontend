import React from 'react';

const UserItem = (props) => {
  return(
    <div>
      {props.user.first_name} {props.user.last_name}
    </div>
  )
}

export default UserItem
