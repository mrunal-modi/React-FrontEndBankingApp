import React from "react";
import Card from "../../components/Card";
import BankImage from "../../components/BankImage";
import "./styles.css";

export default function Home() {
  return (
    <div className="home">
      <Card
        txtcolor="black"
        header="Welcome to the Bank"
        // title="For all your banking needs"
        text="For all your banking needs"
        body={<BankImage />}
      />
    </div>
  );
}
