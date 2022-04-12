import UserContext from "./utils/UserContext";

import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./container/Home";
import CreateAccount from "./container/CreateAccount"
import Deposit from "./container/Deposit";
import Withdraw from "./container/Withdraw";
import AllData from "./container/AllData";

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
              <Route path="/create-account/" component={CreateAccount} />
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
