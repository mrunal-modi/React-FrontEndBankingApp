import UserContext from "./utils/userContect";

import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/Navbar/";

import Home from "./container/Home/home";
import CreateAccount from "./container/CreateAccount/createaccount";
import Deposit from "./container/Deposit/deposit";
import Withdraw from "./container/Withdraw/withdraw";
import AllData from "./container/AllData/alldata";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <UserContext.Provider
          value={{
            users: [
              {
                name: "abel",
                email: "abel@mit.edu",
                password: "secret",
                balance: 100,
              },
            ],
          }}
        >
          <div className="container" style={{ padding: "20px" }}>
              <Route path="/" exact component={Home} />
              <Route path="/CreateAccount/" component={CreateAccount} />
              <Route path="/deposit/" component={Deposit} />
              <Route path="/withdraw/" component={Withdraw} />
              <Route path="/alldata/" component={AllData} />
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
