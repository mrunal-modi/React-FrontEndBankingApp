import React from "react";
import Card from "../components/Card/Card";
import UserContext from "../features/Context";
import CurrentUser from "./CurrentUser";

export default function Logout(props) {
  const ctx = React.useContext(UserContext);
  console.log(ctx.loggedInUser);
  ctx.loggedInUser = undefined;
  console.log(ctx.loggedInUser);
  return (
    <div className="logout">
      <Card
        txtcolor="black"
        header={<div> Logged out <CurrentUser/> </div>}
      />
    </div>
  );
}
