import React from 'react';
import { Spin } from 'antd';

class Loading extends React.Component {
  render(){
    return(
      <div>
        <Spin className="center" size="large" />
        <p><h1 style={{color:'#fff'}}>Loading...</h1></p>
      </div>
    )
  }
}

export default Loading
