import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../Context";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import { Button } from "@mui/material";
import ReactCountryFlag from "react-country-flag";

const StandingsButton = ({ race }) => {
  const {
    setResultsSelected,

    setStandingsSelected,
    driverStandings,
    setDriverStandings,
    setSelectedRace,
    setConstructorStandings,
    circuit,
    setCircuit,
  } = useContext(AppContext);

   // This will handle setting alot of our states initial values and also fetching the data for the corresponding results view data 
  const handleStandingsButton = (currRace) => {
    setSelectedRace(currRace);
    setResultsSelected(false);
    setStandingsSelected(true);
    setConstructorStandings();
    setDriverStandings();
    fetchDriverData(currRace.raceId);
    fetchConstructorData(currRace.raceId);
    fetchCircuitData(currRace.circuitId);
  };

  
   // This will fetch Circuit data from Glitch for the corresponding circuitID
  const fetchCircuitData = async (circuitId) => {
    try {
      const response = await fetch(
        `https://w2024-assign1.glitch.me/api/circuits/${circuitId}`
      );

      let circuit = await response.json();
      setCircuit(circuit[0]);
    } catch (err) {
      console.log(err);
    }
  };

  // This will fetch driver data from Glitch for the corresponding raceID from standings table, this will also call helper functions that 
  // will filter the data 
  const fetchDriverData = async (raceId) => {
    try {
      const response = await fetch(
        `https://w2024-assign1.glitch.me/api/standings/${raceId}/drivers`
      );

      let driverStandingsData = await response.json();

      const driverStandingsTable =
        filterDriverStandingData(driverStandingsData);
      // console.log(driverStandingsTable);
      setDriverStandings(driverStandingsTable);
    } catch (err) {
      console.log(err);
    }
  };

  // This will fetch constructor data from Glitch for the corresponding raceID from standings table, this will also call helper functions that 
  // will filter the data 
  const fetchConstructorData = async (raceId) => {
    try {
      const response = await fetch(
        `https://w2024-assign1.glitch.me/api/standings/${raceId}/constructors`
      );

      let constructorStandingsData = await response.json();

      const constructorStandingsTable = filterConstructorStandingData(
        constructorStandingsData
      );
      // console.log(driverStandingsTable);
      setConstructorStandings(constructorStandingsTable);
    } catch (err) {
      console.log(err);
    }
  };

    // The whole point of this function is to filter the Constructor data object for our reuseableTable so that it will 
    // only include theses fields in our table. The reason we are doing this is because our reuseableTable component will 
    // be able to handle all different fields and values for different data. 
  const filterConstructorStandingData = (constructorStandingsData) => {
    const filteredData = constructorStandingsData.map((item) => {
      const { position, constructors, points, wins } = item;
      const filteredItem = {
        position,
        constructor: `${constructors.name}`,
        points,
        wins,
        constructorRef: constructors.constructorRef,
      };
      return filteredItem;
    });

    return filteredData;
  };

   // The whole point of this function is to filter the driver data object for our reuseableTable so that it will 
    // only include theses fields in our table. The reason we are doing this is because our reuseableTable component will 
    // be able to handle all different fields and values for different data.

  const filterDriverStandingData = (driverStandingsData) => {
    const filteredData = driverStandingsData.map((item) => {
      const { position, drivers, points, wins, nationality } = item;
      const filteredItem = {
        position,
        driver: `${drivers.forename} ${drivers.surname}`,
        points,
        wins,
        driverRef: `${drivers.driverRef}`,
      };
      return filteredItem;
    });

    return filteredData;
  };

   // When the Standing Button is clicked it will handle two fetches to Driver and Constructor tables  
  return (
    <Button
      sx={{
        color: "white",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          width: "100%",
        },
      }}
      onClick={() => handleStandingsButton(race)}
    >
      <h1 className="pl-4 pr-4 text-slate-400">Standings</h1>
      <SportsScoreIcon sx={{ fontSize: 40 }} />
    </Button>
  );
};

export default StandingsButton;
