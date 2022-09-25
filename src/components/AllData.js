import React from "react";
import Card from "./Context";
import { UserContext } from "../index";
import { useContext } from "react";
import Button from "react-bootstrap/Button";

function AllData(props) {
  const [data, setData] = React.useState("");
  const ctx = useContext(UserContext);

  React.useEffect(() => {
    // fetch all accounts from API
    fetch("/account/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(JSON.stringify(data));
      });
  }, []);

  return (
    <div style={{ height: "80vh", alignContent: "center", display: "flex" }}>
      <h5>All data in Store:</h5><br/>
      {data}
      {/* <Card
        txtcolor="black"
        header="All Data"
        type="alldata"
        body={
          <>
            <h5>All data in store</h5>
            {data}
          </>
        }
      /> */}
      {/* {props.isLogged ? (
        <Card
          txtcolor="black"
          header="All Data"
          type="alldata"
          ctx={data}
        />
      ) 
      : (
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
      )
      } */}
    </div>
  );
}

export default AllData;
