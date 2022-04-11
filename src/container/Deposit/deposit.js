import React from 'react';
import BankForm from '../../components/BankForm';
import UserContext from '../../utils/userContext';

export default function Deposit() {
  const ctx = React.useContext(UserContext);
  function handle(data){
      ctx.users.push({name:data.name, email:data.email, password:data.password, balance:100});
      return true;
  }
  return (<h1>Hello</h1>);

  return (
      <BankForm
      bgcolor="primary"
      label="Deposit"
      handle={handle}
      // hideAmount={true}
      successButton="Add another account"
      />
  )
}
