import React from "react";
import {useCurrentUser} from "./Context";

export default function CurrentUser(props) {
  const user = useCurrentUser();
  return (
    <div className={`current-user ${props.className}`}>
      {user?.email}
    </div>
  );
}
