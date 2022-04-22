import { Route } from "react-router-dom";

import UserContext from "./features/Context";
import NavBar from "./container/NavBar/NavBar";

import Home from "./container/Home/Home";
import CreateAccount from "./container/CreateAccount/CreateAccount"
import Login from "./container/Login/Login";
import Deposit from "./container/Deposit/Deposit";
import Withdraw from "./container/Withdraw/Withdraw";
import AllData from "./container/AllData/AllData";
import Logout from "./container/Logout/Logout";

function App() {
  return (
    <div className="App">
        <NavBar />
        <UserContext.Provider
          value={{
            users: [
              {
                name: "admin",
                email: "admin@admin.edu",
                password: "secret",
                balance: 100,
              },
            ],
          }}
        >
          <div className="container" style={{ padding: "20px" }}>
              <Route path="/" exact component={Home} />
              <Route path="/create-account/" component={CreateAccount} />
              <Route path="/login/" component={Login} />
              <Route path="/deposit/" component={Deposit} />
              <Route path="/withdraw/" component={Withdraw} />
              <Route path="/alldata/" component={AllData} />
              <Route path="/logout/" component={Logout} />
          </div>
        </UserContext.Provider>
    </div>
  );
}

export default App;
