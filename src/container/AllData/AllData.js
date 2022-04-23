import React from "react";
import Card from "../../components/Card/Card";
import UserContext from "../../features/Context";
import Table from "../../components/Table/Table";
import "./AllData.css";
import RenderContent from "../../components/Content/RenderContent";

export default function AllData() {
  const ctx = React.useContext(UserContext);

  console.log(ctx);

  let header = [];
  let rows = [];

  if (ctx.loggedInUser === 0) {
    header = ["Email", "Name", "Password", "Balance"];
    rows = ctx.users.map((el) => {
      return [el.email, el.name, el.password, el.balance];
    });
  }

  return (
    <div className="alldata container">
      <div className="row">
        <div className="col-sm-8">
          <Card
            maxWidth="100%"
            txtcolor="black"
            header="All Data"
            title="Admin Access"
            body={
              ctx.loggedInUser === 0 ? (
                <Table header={header} rows={rows} />
              ) : (
                "Access Denied"
              )
            }
            // body={<BankImage/>}
          />
        </div>
        <div className="col-sm-4">
        <RenderContent instruction_type="AllData"/>
        </div>
      </div>
    </div>
  );
}
