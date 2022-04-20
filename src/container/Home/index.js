import React from "react";
import Card from "../../components/Card";
import BankImage from "../../components/BankImage";
import CurrentUser from "../../components/CurrentUser";
import "./styles.css";

export default function Home() {
  return (
    <div className="home">
      <Card
        txtcolor="black"
        header={<div> Welcome to the Bank <CurrentUser/> </div>}
        // title="For all your banking needs"
        text="For all your banking needs"
        body={<BankImage />}
      />
    </div>
  );
}
