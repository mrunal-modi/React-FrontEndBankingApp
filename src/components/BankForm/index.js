import React from "react";
import Card from "../Card";
import UserContext from "../../Context";
// import {validate,sum,subtract} from '../../utils/Helper';

export default function BankForm(props) {
  const [error, setError] = React.useState(null);
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

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

  function handleCreate() {
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
    if (props.handleCreate) props.handleCreate(name, email, password);
    else ctx.users.push({ name, email, password, balance: 0 });
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <div>
      <Card
        bgcolor={props.bgcolor}
        header={props.label}
        status={status}
        body={
          show ? (
            <>
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
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleCreate}
              >
                {props.submitButton || "Create Account"}
              </button>
            </>
          ) : (
            <>
              <h5>Success</h5>
              <button
                type="submit"
                className="btn btn-light"
                onClick={clearForm}
              >
                {props.successButton}
              </button>
            </>
          )
        }
      />
    </div>
  );
}
