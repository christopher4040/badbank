import React from "react";
import Card from "./Context";
import { UserContext } from "../index";
import { useContext } from "react";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const ctx = useContext(UserContext);
  const [show, setShow] = React.useState(false);

  const onSubmit = (data) => {
    const found = ctx.users.some(
      (user) => user.Email === data.Email && user.Password === data.Password
    );
    if (found) {
      props.setIsLogged(true);
      ctx.loggedUser = ctx.users.find(
        (user) => user.Email === data.Email && user.Password === data.Password
      );
      console.log(ctx.loggedUser);
      navigate("/");
    } else setShow(true);
  };

  const template = {
    title: "Login",
    fields: [
      {
        title: "Email",
        type: "email",
        name: "email",
        validationProps: "Enter a valid email.",
      },
      {
        title: "Password",
        type: "password",
        name: "password",
        validationProps:
          "Minimum eight characters, at least one letter, one number and one special character.",
      },
    ],
  };

  const showAlert = () => {
    console.log("Showing Alert");
    setTimeout(() => setShow(false), 6000);
    return (
      <Alert
      className="position-absolute"
      style={{ width: "100%", zIndex: "1", position: "absolute" }}
        variant="danger"
        onClose={() => setShow(false)}
        dismissible
      >
        {/* <Alert.Heading>Oh snap! You got an error!</Alert.Heading> */}
        Your email or password are incorrect. Please try again.
      </Alert>
    );
  };

  return (
    <div style={{ height: "80vh",
    alignContent: "center",
    display: "flex" }}>
      {show && showAlert()}
      <Card
        header={template.title}
        txtcolor="black"
        formTemplate={template}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default Login;
