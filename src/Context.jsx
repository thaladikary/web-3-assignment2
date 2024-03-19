import React, { createContext, useState } from "react";

// Create Context
export const AppContext = createContext();

// Create the Provider Component and pass children as prop
export const ContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AppContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};
