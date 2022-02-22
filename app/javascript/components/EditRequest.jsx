import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EditRequest = (props) => {
const [request, setRequest] = useState("");
const [forms, setForms] = useState({
name: "",
ingredients: "",
instruction: "",
});

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

useEffect(() => {
if (request !== "") {
setForms({
name: request.name,
ingredients: request.ingredients,
instruction: request.instruction,
});
}
}, [request]);

const stripHtmlEntities = (str) => {
return String(str).replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

const onChange = (event) => {
const { name, value } = event.target;

setForms({ ...forms, [name]: value });
};

const onSubmit = (event) => {
event.preventDefault();
const url = `/api/v1/update/${props.match.params.id}`;
const { name, ingredients, instruction } = forms;

if (name.length == 0 || ingredients.length == 0 || instruction.length == 0)
return;

const body = {
name,
ingredients,
instruction: instruction.replace(/\n/g, "<br> <br>"),
};

const token = document.querySelector('meta[name="csrf-token"]').content;

fetch(url, {
method: "PUT",
headers: {
"X-CSRF-Token": token,
"Content-Type": "application/json",
},
body: JSON.stringify(body),
})
.then((response) => {
if (response.ok) {
return response.json();
}
throw new Error("Network response was not ok.");
})
.then((response) =>
props.history.push(`/request/${props.match.params.id}`)
)
.catch((error) => console.log(error.message));
};

return (
<div className="new-request-container">
<div className="new-request-inner-div">
<h1 className="new-request-title">
Edit the request to your desired taste
</h1>

<form className="new-request-form" onSubmit={onSubmit}>
<label className="new-request-label" htmlFor="requestName">
<span className="new-request-span">Request name</span>
<input
type="text"
name="name"
id="requestName"
required
onChange={onChange}
value={forms.name}
className="new-request-text-input"
/>
</label>

<label className="new-request-label" htmlFor="requestIngredients">
<span className="new-request-span">Ingredients</span>
<input
type="text"
name="ingredients"
id="requestIngredients"
required
onChange={onChange}
value={forms.ingredients}
className="new-request-text-input"
/>
<small id="ingredientsHelp">
Separate each ingredient with a comma.
</small>
</label>

<label className="new-request-label" htmlFor="instruction">
<span className="new-request-span">Preparation Instructions</span>
<textarea
id="instruction"
name="instruction"
rows="5"
required
onChange={onChange}
value={forms.instruction}
className="new-request-text-area"
/>
</label>

<button type="submit" className="new-request-submit-btn">
Edit Request
</button>
<Link to="/requests" className="new-request-back-link">
Back to requests
</Link>
</form>
</div>
</div>
);
};

export default EditRequest;

