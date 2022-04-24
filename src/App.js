import { Route } from "react-router-dom";

import UserContext from "./features/Context";
import NavBar from "./container/NavBar/NavBar";

import Home from "./container/Home/Home";
import CreateAccount from "./container/CreateAccount/CreateAccount";
import Login from "./container/Login/Login";
import Deposit from "./container/Deposit/Deposit";
import Withdraw from "./container/Withdraw/Withdraw";
import AllData from "./container/AllData/AllData";
import Logout from "./container/Logout/Logout";
import { useState } from "react";
import Footer from "./container/Footer";

function App() {
  const [loggedInUser, setLoggedInUser] = useState();
  return (
    <div className="App">
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
          loggedInUser: loggedInUser
        }}
      >
        <NavBar loggedInUser={loggedInUser}/>
        <div className="container" style={{ padding: "20px" }}>
          <Route path="/" exact component={Home} />
          <Route path="/create-account/" component={CreateAccount} />
          <Route path="/login/" component={(p) => <Login {...p} setLoggedInUser={setLoggedInUser}/>}/>
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
          <Route path="/logout/" component={(p) => <Logout {...p} setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser}/>} />
        </div>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
