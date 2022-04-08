import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, HashRouter} from "react-router-dom";
import UserContext from "./context";

import NavBar from "./navbar";
import Home from "./home";
import CreateAccount from "./createaccount";
import Login from "./login";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import Balance from "./balance";
import AllData from "./alldata";

const container = document.getElementById("root");
const root = createRoot(container);

function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
          </Routes>
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

root.render(<Spa tab="home"/>);