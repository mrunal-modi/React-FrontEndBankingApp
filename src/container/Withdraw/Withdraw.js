import React from "react";
import TransactForm from "../../forms/TransactForm";
import UserContext from "../../features/Context";

export default function Withdraw(props) {
  const ctx = React.useContext(UserContext);
  const [error, setError] = React.useState(
    ctx.loggedInUser === undefined ? "User not logged In" : null
  );
  const [success, setSuccess] = React.useState(false);

  // if (ctx.loggedInUser === undefined) {
  //   return props.history.push("/login/");
  // }

  function handleWithdraw(amount) {
    if (ctx.users[ctx.loggedInUser].balance >= amount) {
      ctx.users[ctx.loggedInUser].balance =
        parseInt(ctx.users[ctx.loggedInUser].balance) - parseInt(amount);
      console.log("Amount", amount);
      setSuccess(!success);
    } else setError("Insufficient Funds");
  }

  return (
    <div className="Withdraw container">
      <div className="row">
        <div className="col-sm-8">
          {error && <div className="alert alert-danger">{error}</div>}
          {ctx.loggedInUser !== undefined && (
            <TransactForm
              isName={false}
              bgcolor="warning"
              label="Withdraw"
              submitButton="Withdraw"
              onSubmit={handleWithdraw}
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
