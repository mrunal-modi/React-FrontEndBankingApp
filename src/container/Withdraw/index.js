import React from 'react';
import BankForm from '../../components/BankForm';
import UserContext from '../../Context';

export default function Withdraw() {
  const ctx = React.useContext(UserContext);
  function handle(data){
      ctx.users.push({name:data.name, email:data.email, password:data.password, balance:100});
      return true;
  }

  return (
      <BankForm
      bgcolor="primary"
      label="Withdraw"
      handle={handle}
      // hideAmount={true}
      successButton="Add another account"
      />
  )
}
