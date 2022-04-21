import React from "react";
import Balance from "../features/Balance";
import Card from "../components/Card/Card";

export default function TransactForm(props) {
  const [error, setError] = React.useState(null);
  const [amount, setAmount] = React.useState("");

  function validate(label, value) {
    if (!value) {
      return "Error: " + label + " is required";
    }
    console.log(value, typeof value, value <= 1000)
    if (
      label.toLowerCase() === "amount" &&
      !/^[0-9]+$/.test(value) &&
      value >= 1 &&
      value <= 1000
    ) {
      console.log(value, typeof value, value <= 1000)
      return "Error: Amount should be between 1 and 1000";
    }
    return true;
  }

  function handleDeposit() {
    setError("");
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

    (props.onSubmit && typeof props.onSubmit === "function") && props.onSubmit(amount)

  }

  return (
    <div>
      <Card
        bgcolor={props.bgcolor}
        header={props.label}
        body={

            <>
              {error && error.authError && (
                <div className="alert alert-danger">{error.authError}</div>
              )}

              <div>
              <Balance/>
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
