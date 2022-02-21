import React from 'react';
import axios from 'axios';

export default class NewRequest extends React.Component {
  state = {
    description: ''
  }

  handleChange = event => {
    this.setState({ description: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const request = {
        description: this.state.description
    };

    axios.post(`http://localhost:3000/api/v1/requests/create`, { request })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Request Description:
            <input type="text" name="description" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
