import React from "react";
import BankForm from "../../components/BankForm";
import UserContext from "../../Context";

export default function Login() {
  const [error, setError] = React.useState(null);
  const ctx = React.useContext(UserContext);

  function handle(name, email, password) {
    setError("");
    let user = ctx.users.find((el) => {
      return el.email == email;
    });
    if (!user || (user && user.password != password)){
      setError("Invalid Credentials");
    } 
    console.log(user);
    return true;
  }

  return (
    <div>
      {
        error && <div className="alert alert-danger">{error}</div>
      }
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
