import React from "react";
import Card from "../components/Card/Card";
import UserContext from "../features/Context";

export default function BankForm(props) {
  const [error, setError] = React.useState(props.error || null);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function validate(label, value) {
    if (!value) {
      return "Error: " + label + " is required";
    }
    if (label.toLowerCase() === "name" && !/^[a-zA-Z ]*$/.test(value)) {
      return "Error: Name should be using characters";
    }
    if (
      label.toLowerCase() === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ) {
      return "Error: Email should be using @ format";
    }
    if (
      label.toLowerCase() === "password" &&
      !/^[a-z0-9]+$/i.test(value) &&
      value.length >= 8 &&
      value.length <= 13
    ) {
      return "Error: Passwd should be using alphanumeric, min 8, max 13";
    }
    return true;
  }

  function handlSubmit() {
    let error = {};
    let inputs = { Email: email, Password: password };
    if (props.isName !== false) inputs["Name"] = name;

    Object.keys(inputs).map((key) => {
      let isValid = validate(key, inputs[key]); // inputs[key] return the value of the object inputs based on the key
      if (isValid !== true) {
        error[key.toLowerCase()] = isValid;
      }
    });
    console.log(error);

    if (Object.keys(error).length > 0) {
      setError(error);
      return;
    }
    if (props.onSubmit) props.onSubmit(name, email, password);
  }

  return (
    <div>
        {error && error.authError && (
          <div className="alert alert-danger">{error.authError}</div>
        )}
        {props.isName !== false && (
          <>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            {error && error.name && <div> {error.name} </div>}
            <br />
          </>
        )}
        Email address
        <br />
        <input
          type="input"
          className="form-control"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        {error && error.email && <div> {error.email} </div>}
        <br />
        Password
        <br />
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        {error && error.password && <div> {error.password} </div>}
        <br />
        <button type="submit" className="btn btn-light" onClick={handlSubmit}>
          {props.submitButton || "Submit"}
        </button>
    </div>
  );
}
