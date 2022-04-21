import React from "react";
import BankForm from "../../forms/BankForm";
import UserContext from "../../features/Context";

export default function Login(props) {
  const [error, setError] = React.useState(null);
  const ctx = React.useContext(UserContext);

  function handle(name, email, password) {
    setError("");
    let userId;
    let user = ctx.users.find((el, i) => {
      userId = i;
      return el.email == email;
    });
    if (!user || (user && user.password != password)) {
      setError("Invalid Credentials");
    }
    console.log(userId, user);
    ctx.loggedInUser = userId;
    console.log(props);
    if (userId == 0) {
      props.history.push("/alldata/");
    } else {
      props.history.push("/deposit/");
    }

    return true;
  }

  return (
    <div>
      {error && <div className="alert alert-danger">{error}</div>}
      <BankForm
        isName={false}
        bgcolor="warning"
        label="Login"
        submitButton="Login"
        handleCreate={handle}
      />
    </div>
  );
}
