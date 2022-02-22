import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./context/UserContext";

const Request = (props) => {
const [request, setRequest] = useState("");
const [ingredientList, setIngredientsList] = useState(
"No ingredients available"
);
const [user, setUser] = useContext(UserContext);

let requestOwner;
if (user.current_user !== undefined && request !== "") {
requestOwner = user.current_user.id === request.user_id ? true : false;
} else {
requestOwner = false;
}

const [requestInstruction, setRequestInstruction] = useState("");

useEffect(() => {
const {
match: {
params: { id },
},
} = props;

const url = `/api/v1/show/${id}`;

fetch(url)
.then((response) => {
if (response.ok) {
return response.json();
}
throw new Error("Network response was not ok.");
})
.then((response) => setRequest(response))
.catch(() => props.history.push("/requests"));
}, []);

const addHtmlEntities = (str) => {
return String(str).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
};

useEffect(() => {
if (request !== "") {
let listAry;

if (request.ingredients.length > 0) {
listAry = request.ingredients.split(",").map((ingredient, index) => (
<li className="request-show-li" key={index}>
{ingredient}
</li>
));
setIngredientsList(listAry);
}

setRequestInstruction(addHtmlEntities(request.instruction));
}
}, [request]);

const deleteRequest = () => {
const {
match: {
params: { id },
},
} = props;
const url = `/api/v1/destroy/${id}`;
const token = document.querySelector('meta[name="csrf-token"]').content;

fetch(url, {
method: "DELETE",
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
.then(() => props.history.push("/requests"))
.catch((error) => console.log(error.message));
};

return (
<div>
<div
className="show-request-image"
style={{ backgroundImage: `url(assets/${request.image})` }}
>
<h1 className="request-show-name">{request.name}</h1>
</div>

<div>
<div className="request-show-mid-div">
<div className="request-show-ingredients-div">
<h5 className="request-show-ingredients-title">Ingredients</h5>
<ul className="ingredients-ul">{ingredientList}</ul>
</div>

<div>
<h5 className="request-show-prep-title">Preparation Instructions</h5>
<div
dangerouslySetInnerHTML={{
__html: `${requestInstruction}`,
}}
/>
</div>

{requestOwner ? (
<div className="request-show-btn-div">
<Link
to={`/edit_request/${props.match.params.id}`}
className="request-show-edit-link"
>
Edit
</Link>
<button
onClick={deleteRequest}
className="request-show-del-btn"
type="button"
>
Delete
</button>
</div>
) : (
<div></div>
)}
</div>

<button
onClick={() => props.history.goBack()}
className="request-show-back-btn"
>
Back
</button>
</div>
</div>
);
};

export default Request;

