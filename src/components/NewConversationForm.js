import React from 'react';
import { API_ROOT, HEADERS } from '../constants';
import { Form, Input, Button} from 'antd';

class NewConversationForm extends React.Component {
  state = {
    title: ''
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault()
    fetch(`${API_ROOT}/conversations`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state)
    });
    this.setState({ title: '' });
  };

  render = () => {
    return (
      <div className="newConversationForm">
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            placeholder="Create a Module"
            value={this.state.title}
            onChange={this.handleChange}
          /><p></p>
          {/* <input type="submit" /><p></p> */}
          <Button size="small" htmlType="submit">Submit</Button><p></p>
        </Form>
      </div>
    );
  };
}

export default NewConversationForm;
