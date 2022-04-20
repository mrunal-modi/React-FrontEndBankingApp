import React from "react";
import TransactForm from "../../components/TransactForm";
import UserContext from "../../Context";

export default function Withdraw(props) {
  const [error, setError] = React.useState(null);

  return (
    <div>
      {error && <div className="alert alert-danger">{error}</div>}
      <TransactForm
        isName={false}
        bgcolor="warning"
        label="Withdraw"
        submitButton="Withdraw"
        // handleWithdraw={handle}
      />
    </div>
  );
}

