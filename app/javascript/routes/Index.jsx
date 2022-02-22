import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Requests from "../components/Requests";
import Request from "../components/Request";
import NewRequest from "../components/NewRequest";
import EditRequest from "../components/EditRequest";
import UserContext from "../components/context/UserContext";
import Navbar from "../components/Navbar";
import Users from "../components/Users";
import User from "../components/User";

const Index = () => {
const [user, setUser] = useState({});

useEffect(() => {
const url = "/api/v1/user_info";

const token = document.querySelector('meta[name="csrf-token"]').content;

fetch(url, {
method: "GET",
headers: {
"X-CSRF-Token": token,
"Content-Type": "application/json",
},
})
.then((response) => {
if (response.ok) {
return response.json();
}
throw new Error("Network response was not ok.");
})
.then((response) => setUser(response))
.catch((error) => console.log(error.message));
}, []);

return (
<UserContext.Provider value={[user, setUser]}>
<Router>
<Navbar />
<div className="nav-clearance">
<Switch>
<Route path="/" exact component={Home} />
<Route path="/requests" exact component={Requests} />
<Route path="/request/:id" exact component={Request} />
<Route path="/new_request" exact component={NewRequest} />
<Route path="/edit_request/:id" exact component={EditRequest} />
<Route path="/users" exact component={Users} />
<Route path="/user/:id" exact component={User} />
</Switch>
</div>
</Router>
</UserContext.Provider>
);
};

export default Index;

