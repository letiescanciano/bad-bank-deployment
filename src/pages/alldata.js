import React, { useContext } from "react";
import { UserContext } from "./userContext";

export default function AllData() {
  const ctx = useContext(UserContext);

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Password</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>

        {ctx.users.length === 0 ? (
          <tbody>
            <tr>
              <td style={{ color: "dimgrey", weight: "light" }}>
                {" "}
                xyz@email.com{" "}
              </td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {ctx.users.map((user,i) => {
              return (
                <tr key={i}>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>{user.password}</td>
                  <td>{ctx.userBalance}</td>
                </tr>
              )
            })}
          </tbody>
        )}
      </table>
    </div>
  );
}
