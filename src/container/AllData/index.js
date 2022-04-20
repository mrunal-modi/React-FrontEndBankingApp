import React from 'react';
import Card from '../../components/Card';
import UserContext from '../../Context';
import Table from "../../components/Table";
import './styles.css';

export default function AllData(){
  const ctx = React.useContext(UserContext);
  
  console.log(ctx);

  let header = [];
  let rows = [];

  if (ctx.loggedInUser == 0) {
    header = ["Email", "Name", "Password", "Balance"];
    rows = ctx.users.map(el => {
      return [el.email, el.name, el.password, el.balance];
    })
  }

  return (
    <div className="alldata">
      <Card
      maxWidth="100%"
      txtcolor="black"
      header="All Data > Login using admin@admin.edu | secret"
      title="Admin Access"
      body={ ctx.loggedInUser == 0 ? <Table header={header} rows={rows}/> : "Access Denied"}
      // body={<BankImage/>}
    />    
    </div>
  );  
}