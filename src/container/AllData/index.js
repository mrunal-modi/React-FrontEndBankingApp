import React from 'react';
import Card from '../../components/Card';
import UserContext from '../../utils/UserContext';

export default function AllData(){
  const ctx = React.useContext(UserContext);
  console.log(ctx);
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