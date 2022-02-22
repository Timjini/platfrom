import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Requests = () => {
const [requests, setRequests] = useState([]);

useEffect((props) => {
  const url = "/api/v1/requests/index";
      fetch(url)
      .then((response) => {
        if (response.ok) {
      return response.json();
      }
      throw new Error("Network response was not ok.");
      })
      .then((response) => setRequests(response))
      .catch(() => props.history.push("/"));
      }, []);

  const allRequests = requests.map((request) => (
      <div key={request.data.id}>
      <div className="request-container">
      <img
      src={`assets/${request.data.image}`}
      alt={`${request.data.name} image`}
      height="300"
      width="300"
      />
      <p>
      By{" "}
      <Link to={`/user/${request.user.id}`} className="blue-link">
      {request.user.username}
      </Link>
      </p>
      <p>{request.data.name}</p>
      <Link to={`/request/${request.data.id}`} className="view-request-link">
      View Request
      </Link>
      </div>
      </div>
      ));

      const noRequest = (
      <div>
      <h4>
      No requests yet. Why not <Link to="/new_request">create one</Link>
      </h4>
      </div>
      );

      return (
      <div>
      <div className="request-index-header">
      <h1 className="request-index-title">Requests for every occasion</h1>
      <p>
      We've pulled together our most popular requests, our latest additions,
      and our editor's picks, so there's sure to be something tempting for
      you to try.
      </p>
      </div>

      <div className="bottom-container">
      <div className="new-request-link-div">
      <Link to="/new_request" className="request-index-new-link">
      Create New Request
      </Link>
      </div>
      <div className="request-index-grid">
      {requests.length > 0 ? allRequests : noRequest}
      </div>
      <Link to="/" className="home-btn-link">
      Home
      </Link>
      </div>
      </div>
      );
};

export default Requests;

