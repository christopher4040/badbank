import React, { useContext } from "react";
import { UserContext } from "../index";

function Table() {
  const ctx = useContext(UserContext);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">Balance</th>
        </tr>
      </thead>
      <tbody>
        {ctx.users.map((user, i) => {
          return (
            <tr key={i}>
              <td>{user.Name}</td>
              <td>{user.Email}</td>
              <td>{user.Password}</td>
              <td>${user.Balance}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
