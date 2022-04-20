import React from "react";
import TransactForm from "../../components/TransactForm";
import UserContext from "../../Context";

export default function Deposit(props) {
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(false);
  const ctx = React.useContext(UserContext);

  if (ctx.loggedInUser === undefined) {
    return props.history.push("/login/");
  }

  function handleDeposit(amount) {
    ctx.users[ctx.loggedInUser].balance = parseInt(ctx.users[ctx.loggedInUser].balance) + parseInt(amount);
    console.log("Amount", amount)
    setSuccess(!success);
  }

  return (
    <div>
      {error && <div className="alert alert-danger">{error}</div>}
      <TransactForm
        isName={false}
        bgcolor="warning"
        label="Deposit"
        submitButton="Deposit"
        onSubmit={handleDeposit}
      />
    </div>
  );
}
