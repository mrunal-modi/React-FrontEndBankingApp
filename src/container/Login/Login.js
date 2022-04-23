import React from "react";
import BankForm from "../../forms/BankForm";
import Card from "../../components/Card/Card";
import UserContext from "../../features/Context";
import CurrentUser from "../../features/CurrentUser";
import RenderContent from "../../components/Content/RenderContent";

export default function Login(props) {
  const ctx = React.useContext(UserContext);
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(ctx.loggedInUser !== undefined);

  function handleSubmit(name, email, password) {
    setError("");
    let userId;
    let user = ctx.users.find((el, i) => {
      userId = i;
      return el.email === email;
    });
    if (!user || (user && user.password !== password)) {
      setError("Invalid Credentials");
    }
    console.log(userId, user);
    ctx.loggedInUser = userId;
    setSuccess(true);
    // if (userId == 0) {
    //   props.history.push("/alldata/");
    // } else {
    //   props.history.push("/deposit/");
    // }
    return true;
  }

  // function clearForm() {
  //   setSuccess(false);
  // }

  return (
    <div className="login container">
      <div className="row">
        <div className="col-sm-8">
          <Card bgcolor="warning" header="Login" hideCurrentUser={true}>
            {success ? (
              <>
                <h5>
                  Successfully Logged In <CurrentUser />
                </h5>
              </>
            ) : (
              <BankForm onSubmit={handleSubmit} isName={false} />
            )}
          </Card>
        </div>

        <div className="col-sm-4">
        <RenderContent instruction_type="Login"/>
        </div>
      </div>
    </div>
  );
}
