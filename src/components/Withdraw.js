import React from "react";
import Card from "./Context";
import { UserContext } from "../index";
import { useContext } from "react";
import { Alert, Button } from "react-bootstrap";

function Withdraw(props) {
  const ctx = useContext(UserContext);
  const [error, setError] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const [balance, setBalance] = React.useState(
    props.isLogged ? ctx.loggedUser.Balance : 0
  );

  const onSubmit = (data) => {
    if (data.Withdraw <= balance) {
      setError(false);
      const newBalance = balance - data.Withdraw;
      setBalance(newBalance);
      ctx.loggedUser.Balance -= data.Withdraw;
    } else {
      setError(true);
    }
    setShowAlert(true);
    console.log("Withdraw", data);

    console.log("Withdraw", balance);
  };

  const template = {
    title: "Withdraw",
    fields: [
      {
        title: "Withdraw",
        type: "number",
        name: "withdraw",
        validationProps: "The amount must be more than $0 dollars",
      },
    ],
  };

  const handleAlert = () => {
    console.log("Showing Alert");
    setTimeout(() => setShowAlert(false), 6000);

    if (error) {
      return (
        <Alert
          className="position-absolute"
          style={{ width: "100%", zIndex: "1", position: "absolute" }}
          variant="danger"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          Not enough balance on your account. Please withdraw a valid amount.
        </Alert>
      );
    } else {
      return (
        <Alert
          className="position-absolute"
          style={{ width: "100%", zIndex: "1", position: "absolute" }}
          variant="success"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          Your withdrawal request has been processed succesfully!
        </Alert>
      );
    }
  };

  return (
    <div style={{ height: "80vh", alignContent: "center", display: "flex" }}>
      {showAlert && handleAlert()}
      {props.isLogged ? (
        <Card
          header={template.title}
          txtcolor="black"
          title={"Actual Balance : $" + balance}
          formTemplate={template}
          onSubmit={onSubmit}
        />
      ) : (
        <Card
          header={template.title}
          txtcolor="black"
          text="Please, Login or Create an account to continue."
          body={
            <>
              <Button href="#/login" variant="primary" className="me-4">
                Login
              </Button>
              <Button href="#/createaccount" variant="secondary">
                Create Account
              </Button>
            </>
          }
        />
      )}
    </div>
  );
}

export default Withdraw;
