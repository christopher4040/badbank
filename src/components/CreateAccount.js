import Card from "./Context";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import { UserContext } from "../index";
import { useContext } from "react";

export function CreateAccount(props) {
  const ctx = useContext(UserContext);
  const [showModal, setShowModal] = React.useState(false);

  const onSubmit = (data) => {
    handleShow();
    props.setIsLogged(true);
    ctx.users.push(data);
    ctx.loggedUser = data;
    console.log("Handle Show", data);
  };
  const handleClose = () => {
    setShowModal(false);
    console.log("Handle Close");
  };
  const handleShow = () => {
    setShowModal(true);
    console.log("Handle Show");
  };

  let template = {
    title: "Create Account",
    fields: [
      {
        title: "Name",
        type: "text",
        name: "name",
        validationProps: "Enter a valid name.",
      },
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
      {
        title: "Balance",
        type: "number",
        name: "balance",
        validationProps: "The amount must be more than $0 dollars",
      },
    ],
  };

  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Body className="modal-style">
          <p>The account has been created succesfully!</p>
          <hr/>
          <Button className="me-3" variant="outline-success" onClick={handleClose}>
            Create another account
          </Button>
          
          <Button variant="secondary" href="/#" onClick={handleClose}>
            Close
          </Button>
        </Modal.Body>

        
      </Modal>
      <div style={{ height: "80vh",
      alignContent: "center",
      display: "flex" }}>
        <Card
        header={template.title}
        txtcolor="black"
        formTemplate={template}
        onSubmit={onSubmit}
      />
      </div>
      
    </div>
  );
}

export default CreateAccount;
