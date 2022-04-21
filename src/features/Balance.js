
// Balance component to get Balance of currently logged in user & display on screen

import React from "react";
import {useCurrentUser} from "./Context";

export default function Balance() {
  const user = useCurrentUser();
  return (
    <div>
      Balance {user?.balance}
    </div>
  );
}
