
// Balance component to get Balance of currently logged in user & display on screen

import React from "react";
import UserContext from "../../Context";

export default function Balance() {
  const ctx = React.useContext(UserContext);
  const [email, setEmail] = React.useState("");
  const [balance, setBalance] = React.useState("");

  let userId;
  let user = ctx.users.find((el, i) => {
    userId = i;
    return el.email == email;
  });
  
  ctx.loggedInUser = userId;
  console.log(userId, user);

  return (
    <>
    <div>
      {userId}
    </div>
    </>
  );
}
