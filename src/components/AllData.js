import React from "react";
import Card from "./Context";
import { UserContext } from "../index";
import { useContext } from "react";
import Button from "react-bootstrap/Button"

function AllData(props) {
  const ctx = useContext(UserContext);
  console.log(ctx);
  return (
    <div style={{ height: "80vh", alignContent: "center", display: "flex" }}>
      {props.isLogged ? (
        <Card
          txtcolor="black"
          header="All Data"
          type="alldata"
          ctx={ctx.users}
        />
      ) : (
        <Card
          header="All Data"
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

export default AllData;
