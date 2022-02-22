import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../components/context/UserContext";

const User = (props) => {
const [shUser, setShUser] = useState("");
const [requests, setRequests] = useState([]);
const [user, setUser] = useContext(UserContext);
const [allRequests, setAllRequests] = useState("");

const loadUser = () => {
const {
match: {
params: { id },
},
} = props;

const url = `/api/v1/user/${id}`;

fetch(url)
.then((response) => {
if (response.ok) {
return response.json();
}
throw new Error("Network response was not ok.");
})
.then((response) => setShUser(response))
.catch(() => props.history.push("/requests"));
};

const loadUserRequests = () => {
const {
match: {
params: { id },
},
} = props;

const url = `/api/v1/requests/user_requests/${id}`;

fetch(url)
.then((response) => {
if (response.ok) {
return response.json();
}
throw new Error("Network response was not ok.");
})
.then((response) => setRequests(response))
.catch(() => props.history.push("/requests"));
};

useEffect(() => {
loadUser();
loadUserRequests();
}, []);

// update page when params updates
useEffect(() => {
loadUser();
loadUserRequests();
}, [props]);

useEffect(() => {
if (requests.length === 0) {
if (user.current_user && shUser) {
if (shUser.id === user.current_user.id) {
setAllRequests(
<div className="no-requests-div">
<h4 className="noRequestText">
No requests yet. Why not{" "}
<Link to="/new_request" className="blue-link">
create one
</Link>
</h4>
</div>
);
} else {
setAllRequests(
<div className="no-requests-div">
<h4 className="noRequestText">
{shUser.username} hasn't shared any requests yet.
</h4>
</div>
);
}
}
} else {
const requestsJsx = requests.map((request, index) => {
return (
<div key={index}>
<div className="request-container">
<img
src={`assets/${request.image}`}
alt={`${request.name} image`}
height="300"
width="300"
/>
<p>{request.name}</p>
<Link to={`/request/${request.id}`} className="view-request-link">
View Request
</Link>
</div>
</div>
);
});

setAllRequests(requestsJsx);
}
}, [requests, user, shUser]);

return (
<div className="user-show-container">
<div className="user-show-header-info">
<div className="user-show-info-div">
<p className="user-show-username">{shUser.username}</p>

<div className="user-show-head-inner-div">
<p className="user-show-name">{`${shUser.first_name} ${shUser.last_name}`}</p>
{shUser.bio ? (
<p className="user-show-bio">{shUser.bio}</p>
) : (
<div></div>
)}
<p className="user-show-request-count">Requests: {requests.length}</p>
</div>
</div>
</div>

<div className="request-index-grid">{allRequests}</div>
</div>
);
};

export default User;

