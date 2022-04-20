import React from 'react';
import BankForm from '../../components/BankForm';

export default function CreateAccount() {
  return (
      <BankForm
      bgcolor="warning"
      label="Create Account"   
      hideCurrentUser={true}
      successButton="Add another account"
      />
  )
}
