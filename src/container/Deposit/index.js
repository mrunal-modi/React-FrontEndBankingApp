import React from "react";
import TransactForm from "../../components/TransactForm";
import UserContext from "../../Context";

export default function Deposit(props) {
  const [error, setError] = React.useState(null);

  return (
    <div>
      {error && <div className="alert alert-danger">{error}</div>}
      <TransactForm
        isName={false}
        bgcolor="warning"
        label="Deposit"
        submitButton="Deposit"
        // handleDeposit={handle}
      />
    </div>
  );
}



// Container component => Deposit (Jsx)
// function Deposit{
//   <TransactionComponent />
// }

// Transaction component => Transaction will user Balance Component and allow SUM with new Amount
// function TransactionComponent{
//   handle = {
//       on the bases of input value update balance of current logged in user
//   }
//   <Card
//       title={props.title}
//       body={
//           <>
//           <BalanceComponent />
//           <input />
//           <submitButton onClick={handle}/>
//           </>
//       }
//   >
// }
