import React from 'react';
import axios from 'axios';
import DeleteRequest from './DeleteRequest';

export default class Requests extends React.Component {
    state = {
      requests: []
    }
  
    componentDidMount() {
      axios.get(`http://localhost:3000/api/v1/requests/index`)
        .then(res => {
          const requests = res.data;
          this.setState({ requests });
        })
    }
  
    render() {
      return (
        <>
        <ul>
          {
            this.state.requests
              .map(request =>
                <li key={request.id}>{request.description}</li>
              )
          }
        </ul>
        <DeleteRequest />
        </>
      )
    };
  }