import React from "react";
import TransactForm from "../../forms/TransactForm";
import UserContext from "../../features/Context";

export default function Withdraw(props) {
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(false);
  const ctx = React.useContext(UserContext);

  if (ctx.loggedInUser === undefined) {
    return props.history.push("/login/");
  }

  function handleWithdraw(amount) {
    if(ctx.users[ctx.loggedInUser].balance >= amount){
      ctx.users[ctx.loggedInUser].balance = parseInt(ctx.users[ctx.loggedInUser].balance) - parseInt(amount);
    console.log("Amount", amount)
    setSuccess(!success);
    } else setError("Insufficient Funds")
    
  }

  return (
    <div>
      {error && <div className="alert alert-danger">{error}</div>}
      <TransactForm
        isName={false}
        bgcolor="warning"
        label="Withdraw"
        submitButton="Withdraw"
        onSubmit={handleWithdraw}
      />
    </div>
  );
}
