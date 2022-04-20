import React from "react";
import Balance from "../../components/Balance";
import Card from "../Card";
import UserContext from "../../Context";

export default function TransactForm(props) {
  const [error, setError] = React.useState(null);
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate(label, value) {
    if (!value) {
      return "Error: " + label + " is required";
    }
    if (
      label.toLowerCase() === "amount" &&
      !/^[0-9]+$/i.test(value) &&
      value.length >= 1 &&
      value.length <= 1000
    ) {
      return "Error: Amount should be between 1 and 1000";
    }
    return true;
  }

  function handleDeposit() {
    let error = {};
    let inputs = { Amount: amount };

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
    if (props.handleCreate) props.handleDeposit(name, email, amount);
    else {
      let index = ctx.users.findIndex((el) => el.email == email);
      if (index == -1) {
        ctx.users.push({ name, email, amount, balance: 0 });
        setShow(false);
      } else setError({ authError: "user with this email already exists!" });
    }
  }

  return (
    <div>
      <Card
        bgcolor={props.bgcolor}
        header={props.label}
        status={status}
        body={

            <>
              {error && error.authError && (
                <div className="alert alert-danger">{error.authError}</div>
              )}

              <div>
              Balance <Balance/>
              </div>
              
              <br />
              {props.label} Amount
              <br />
              <input
                type="amount"
                className="form-control"
                id="amount"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.currentTarget.value)}
              />
              {error && error.amount && <div> {error.amount} </div>}
              <br />
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleDeposit}
              >
                {props.submitButton}
              </button>
            </>
        }
      />
    </div>
  );
}
