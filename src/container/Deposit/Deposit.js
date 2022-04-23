import React from "react";
import TransactForm from "../../forms/TransactForm";
import UserContext from "../../features/Context";

export default function Deposit(props) {
  const ctx = React.useContext(UserContext);
  const [error, setError] = React.useState(ctx.loggedInUser === undefined? ("User not logged In"): null);
  const [success, setSuccess] = React.useState(false);

  // if (ctx.loggedInUser === undefined) {
  //   return props.history.push("/login/");
  // }


  function handleDeposit(amount) {
    ctx.users[ctx.loggedInUser].balance = parseInt(ctx.users[ctx.loggedInUser].balance) + parseInt(amount);
    console.log("Amount", amount)
    setSuccess(!success);
  }

  return (
<div className="deposit container">
  <div className="row">
    <div className="col-sm-8">
      {error && <div className="alert alert-danger">{error}</div>}
      {ctx.loggedInUser !== undefined && (
        <TransactForm
          isName={false}
          bgcolor="warning"
          label="Deposit"
          submitButton="Deposit"
          onSubmit={handleDeposit}
        />
      )}
    </div>

    <div className="col-sm-4">
      <h1>Instructions</h1>
      <p>lorem ipsum</p>
    </div>
  </div>
</div>

  );
}
