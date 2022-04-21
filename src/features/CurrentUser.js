import React from "react";
import {useCurrentUser} from "../Context";

export default function CurrentUser() {
  const user = useCurrentUser();
  return (
    <div>
      {user?.email}
    </div>
  );
}
