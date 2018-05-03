import React from 'react';
import { Spin } from 'antd';

class Loading extends React.Component {
  render(){
    return(
      <div>
        <Spin size="large" />
      </div>
    )
  }
}

export default Loading
