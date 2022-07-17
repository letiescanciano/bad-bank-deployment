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
                <tr>
                  <td key={i+'1'}>{user.email}</td>
                  <td key={i+'2'}>{user.name}</td>
                  <td key={i+'3'}>{user.password}</td>
                  <td key={i+'4'}>{ctx.userBalance}</td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
}
