import React from 'react';
import { API_ROOT, HEADERS } from '../constants';

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
        <form onSubmit={this.handleSubmit}>
          <label>New Mod</label>
          <br />
          <input
            type="text"
            placeholder="Name a Module"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input type="submit" /><p></p>
        </form>
      </div>
    );
  };
}

export default NewConversationForm;
