import React, { createContext, useState, useEffect } from "react";

// Create Context
export const AppContext = createContext();

// Create the Provider Component and pass children as prop
export const ContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [seasons, setSeasons] = useState();
  const [selectedSeason, setSelectedSeason] = useState();
  const [favorites, setFavorites] = useState();

  return (
    <AppContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        seasons,
        setSeasons,
        selectedSeason,
        setSelectedSeason,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
