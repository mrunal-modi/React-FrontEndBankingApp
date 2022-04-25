import React from "react";
const UserContext = React.createContext(null);

export default UserContext;

// Custom Hook is a function that starts with use..
export function useCurrentUser() {
  const ctx = React.useContext(UserContext);
  console.log(ctx);

  let userId = ctx?.loggedInUser;
  if (userId === undefined)
  return null;
  let user = ctx.users[userId];
  return user;
}
