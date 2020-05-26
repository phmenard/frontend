import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import "../css/index.css";

const formSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required")
})


export const Form = ()=>{
  const [formState, setFormState] = useState({
    email: "",
    password: ""
  })

  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);


const [errorState, setErrorState] = useState({
  email: "",
  password: ""
});

const validate = e => {
  let value = 
  e.target.type === "checkbox" ?
  e.target.checked : e.target.value;
  yup
  .reach(formSchema, e.target.name)
  .validate(value)
  .then(valid => {
    setErrorState({
      ...errorState,
      [e.target.name] : ""
    });
  });
};

const inputChange = e => {
  e.persist();
  validate(e);
  let value =
  e.target.type === "checkbox" ?
  e.traget.checked : e.target.value;
  setFormState({ ...formState, [e.target.name] : value });
}

const formSubmit = e => {
  e.preventDefault();
  console.log("form submitted!");
  axios
  .post("https://regres.in/api/users", formState)
  .then(response => console.log(response))
  .catch(err => console.log(err));
};

return (
  <form onSubmit={formSubmit}>
<label htmlForm="email">
  <input
  type="text"
  name="email"
  id="email"
  placeholder="Email Address"
  value={formState.email}
  onChange={inputChange}
  />
  {errorState.email.length > 0 ? ( <p className="error">{errorState.email}</p>) : null}
</label>
<label htmlForm="password">
  <input
  type="text"
  name="password"
  id="password"
  placeholder="password"
  value={formState.password}
  onChange={inputChange}
  />
</label>
<button disabled = {buttonDisabled}>Login</button>
  </form>
)

}
const Header = () => {
  return (
    <Router>
      <div className="container-wrapper">
        <div className="container-navbar">
          <h1>SILENT AUCTION</h1>

          <nav className="navbar">
            <Route exact path="/"></Route>
            <button>
              <Link to="/">Home</Link>
            </button>
            <button>
              <Link to="/create">Create Auction</Link>
            </button>
            <Form />
            <button>Sign Up</button>
          </nav>
        </div>
      </div>
    </Router>
  );
};

export default Header;
