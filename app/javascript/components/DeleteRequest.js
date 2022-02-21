import React from 'react';
import axios from 'axios';

export default class DeleteRequest extends React.Component {
    state = {
        id: ''
    }

    handleChange = event => {
        this.setState({ id: event.target.value});
    }
    handleSubmit = event => {
        event.preventDefault();
        axios.delete(`http://localhost:3000/api/v1/destroy/${this.state.id}`)
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
                Request ID:
                <input type="number" name="id" onChange={this.handleChange} />
              </label>
              <button type="submit">Delete</button>
            </form>
          </div>
        )
      }

}