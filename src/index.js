import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createContext } from "react";

export const UserContext = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContext.Provider
      value={{
        users: [
          {
            Name: "Christopher Maldonado",
            Email: "christopherpr101@gmail.com",
            Password: "123456a!",
            Balance: 200,
          },
        ],
        loggedUser: null,
      }}
    >
      <App />
    </UserContext.Provider>
  </React.StrictMode>
);
