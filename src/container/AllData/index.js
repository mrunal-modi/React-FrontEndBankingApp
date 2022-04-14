import React from 'react';
import Card from '../../components/Card';
import UserContext from '../../Context';
import BankImage from "../../components/BankImage";
import Table from "../../components/Table";
import './styles.css';

export default function AllData(){
  const ctx = React.useContext(UserContext);
  console.log(ctx);
  let header = [];
  let rows = [];

  if (ctx.loggedInUser == 0) {
    header = ["Email", "Name", "Password"];
    rows = ctx.users.map(el => {
      return [el.email, el.name, el.password];
    })
  }

  return (
    <div className="alldata">
      <Card
      maxWidth="100%"
      txtcolor="black"
      header="All Data Module"
      title="Administrator Access Only"
      body={ ctx.loggedInUser == 0 ? <Table header={header} rows={rows}/> : "Access Denied"}
      // body={<BankImage/>}
    />    
    </div>
  );  
}