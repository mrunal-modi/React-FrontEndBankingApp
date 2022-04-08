import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, HashRouter} from "react-router-dom";
import UserContext from "./routes/context";

import NavBar from "./navbar";
import Home from "./routes/home";
import CreateAccount from "./routes/createaccount";
import Login from "./routes/login";
import Deposit from "./routes/deposit";
import Withdraw from "./routes/withdraw";
import Balance from "./routes/balance";
import AllData from "./routes/alldata";

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