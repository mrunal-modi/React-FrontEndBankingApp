import React, { useContext, useEffect } from 'react';
import Card from "../../components/Card/Card";
import UserContext from "../../features/Context";
import CurrentUser from "../../features/CurrentUser";

export default function Logout(props) {
  const ctx = useContext(UserContext);
  useEffect(() => {
    if (ctx.loggedInUser !== undefined)
    {
      ctx.loggedInUser = undefined; // Reset LoggedIn
    }
  });
   
  console.log(ctx.loggedInUser);
  return (
    <div className="logout">
      <Card bgcolor="warning" header={<div> Log out </div>}>
        <h5>
          Successfully Logged Out <CurrentUser />
        </h5>
      </Card>
    </div>
  );
}
