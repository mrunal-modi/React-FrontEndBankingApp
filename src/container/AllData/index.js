import React from 'react';
import Card from '../../components/Card';
import UserContext from '../../utils/userContext';

export default function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <Card
      txtcolor="black"
      header="Deposit Module"
      title="Welcome to the bank"
      text={JSON.stringify(ctx)}
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}