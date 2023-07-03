import { createContext, useState } from "react";

// Membuat konteks
export const UserContext = createContext();

// Membuat komponen penyedia (Provider) untuk konteks
export const UserProvider = ({ children }) => {
  const [isLoginIn, setIsLoginIn] = useState(false);
  const [emailLogin, setEmailLogin] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const login = (email, isAdmin) => {
    setIsLoginIn(true);
    setEmailLogin(email);
    setIsAdmin(isAdmin);
  };

  const logout = () => {
    setIsLoginIn(false);
    setEmailLogin("");
    setIsAdmin(false);
  };

  return (
    <UserContext.Provider
      value={{
        isLoginIn,
        setIsLoginIn,
        emailLogin,
        setEmailLogin,
        login,
        logout,
        isAdmin,
        setIsAdmin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
