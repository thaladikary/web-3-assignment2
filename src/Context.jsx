import React, { createContext, useState, useEffect } from "react";

// Create Context
export const AppContext = createContext();

// Create the Provider Component and pass children as prop
export const ContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [seasons, setSeasons] = useState();
  const [selectedSeason, setSelectedSeason] = useState();
  const [races, setRaces] = useState();
  const [favorites, setFavorites] = useState();
  const [selectedRace, setSelectedRace] = useState([]);
  const [resultsSelected, setResultsSelected] = useState(false);
  const [standingsSelected, setStandingsSelected] = useState(false);
  const [topDrivers, setTopDrivers] = useState();
  const [qualifyingData, setQualifying] = useState();
  const [resultsData, setResultsData] = useState();
  const [driverStandings, setDriverStandings] = useState();
  const [constructorStandings, setConstructorStandings] = useState();
  const [driverData, setDriverData] = useState();
  const [ circuit,setCircuit] = useState();
  const [ modalOpen,setOpenModal] = useState(false);

  return (
    <AppContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        seasons,
        setSeasons,
        selectedSeason,
        setSelectedSeason,
        races,
        setRaces,
        favorites,
        setFavorites,
        selectedRace,
        setSelectedRace,
        resultsSelected,
        standingsSelected,
        setResultsSelected,
        setStandingsSelected,
        topDrivers,
        setTopDrivers,
        qualifyingData,
        setQualifying,
        resultsData,
        setResultsData,
        driverStandings,
        setDriverStandings,
        constructorStandings,
        setConstructorStandings,
        driverData, 
        setDriverData,
        circuit,
        setCircuit,
        modalOpen,
        setOpenModal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
