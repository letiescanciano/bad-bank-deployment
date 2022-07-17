import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userBalance, setUserBalance] = useState(1000);
  const [users, setUsers] = useState([]);
  // const [userLogin, setUserLogin] = useState(false);
  const [currentEmail, setCurrentEmail] = useState("");

  return (
    <UserContext.Provider
      value={{
        userBalance,
        users,
        currentEmail,
        setUserBalance,
        setUsers,
        setCurrentEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
