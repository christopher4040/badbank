import React from "react";
import Card from "./Context";
import { UserContext } from "../index";
import { useContext } from "react";
import Alert from "react-bootstrap/Alert";
import { Button } from "react-bootstrap";

function Deposit(props) {
  const ctx = useContext(UserContext);
  const [showAlert, setShowAlert] = React.useState(false);
  const [balance, setBalance] = React.useState(
    props.isLogged ? ctx.loggedUser.Balance : 0
  );

  const onSubmit = (data) => {
    console.log(data)
    setShowAlert(true);
    const newBalance = balance + data.Deposit;
    setBalance(newBalance);
    ctx.loggedUser.Balance += data.Deposit;
  
    console.log("Deposit",balance);
  };

  const template = {
    title: "Deposit",
    fields: [
      {
        title: "Deposit",
        type: "number",
        name: "deposit",
        validationProps: "The amount must be more than $0 dollars",
      },
    ],
  };

  const handleAlert = () => {
    console.log("Showing Alert");
    setTimeout(() => setShowAlert(false), 6000);

    return (
      <div>
        <Alert
        className="position-absolute"
        style={{ width: "100%", zIndex: "1", position: "absolute" }}
        variant="success"
        onClose={() => setShowAlert(false)}
        dismissible
      >
        Your deposit request has been processed succesfully!
      </Alert>
      </div>
      
    );
  };

  return (
    <div style={{ height: "80vh",
      alignContent: "center",
      display: "flex" }}>
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
            <Button href="#/login" variant="primary" className="me-4">Login</Button>
            <Button href="#/createaccount" variant="secondary">Create Account</Button>
            </>
            
          }
        />
      )}
    </div>
  );
}

export default Deposit;
