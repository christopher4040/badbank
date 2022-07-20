import Card from "./Context";
import BankLogo from "../assets/bank.svg";
import { UserContext } from "../index";
import { useContext } from "react";

function Home() {
  const ctx = useContext(UserContext); 
  console.log("Logged User : ", ctx.loggedUser)
  return (
    <div style={{ height: "80vh",
    alignContent: "center",
    display: "flex" }}>
      <Card
        txtcolor="black"
        header="Bad Bank"
        title={ctx.loggedUser !== null ? "Welcome "+ctx.loggedUser.Name+"!" : "Welcome to the Bad Bank app! Please login or create an account to see the information."}
        // text="You can use this bank"
        body={
          <img
            src={BankLogo}
            alt="Bank"
            style={{
              width: "85%",
              maxWidth: "400px",
              margin: "auto",
              display: "flex",
            }}
          />
        }
      />
    </div>
  );
}

export default Home;
