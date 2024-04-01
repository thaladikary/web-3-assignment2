import { useState, useEffect, useContext } from "react";
import { AppContext } from "../Context";
import {
  ListSubheader,
  List,
  CircularProgress,
  Box,
  Button,
} from "@mui/material";

import RaceItem from "./racesection_components/RaceItem";
import { styled } from "@mui/material/styles";

const RacesSection = () => {
<<<<<<< HEAD
  const {
    races,
    setRaces,
    selectedSeason,
    setSelectedSeason,
    resultsSelected,
    setResultsSelected,
    standingsSelected,
    setStandingsSelected,
    selectedRace,
    setSelectedRace,
    topDrivers,
    setTopDrivers,
    qualifyingData,
    setQualifying
  } = useContext(AppContext);

  const handleResultsButton = (currRace) => {
    setSelectedRace(currRace);
    setStandingsSelected(false);
    setResultsSelected(true);
    fetchResultData(currRace.raceId);
    fetchQualifyingtData(currRace.raceId); 
  };
=======
  const { races, setRaces, selectedSeason, setSelectedSeason } =
    useContext(AppContext);
>>>>>>> 4638c5f9e3f236eafdf685170bd9628da0ff23e0

  const handleYearButton = () => {
    setSelectedSeason(false);
  };
<<<<<<< HEAD
  const handleStandingsButton = () => {
    setResultsSelected(false);
    setStandingsSelected(true);
  };

  const fetchResultData = async (raceId) => {
    try {
      const response = await fetch(
        `https://w2024-assign1.glitch.me/api/results/${raceId}`
      );
      let racesData = await response.json();
      const topThreeDrivers = filterResultData(racesData);
      setTopDrivers(topThreeDrivers);
    } catch (err) {
      console.log(err);
    }
  };
  
  const fetchQualifyingtData = async (raceId) => {
    try {
      const response = await fetch(
        `https://w2024-assign1.glitch.me/api/qualifying/${raceId}`
      );

      let qualifyingTable = await response.json();
      
      setQualifying(qualifyingTable);
    } catch (err) {
      console.log(err);
    }
  };

  const filterResultData = (resultData) => {
    console.log(resultData);
    resultData = resultData.filter((data) => data.positionOrder <= 3);
    return resultData;
  };
=======
>>>>>>> 4638c5f9e3f236eafdf685170bd9628da0ff23e0

  useEffect(() => {
    const fetchRacesData = async () => {
      try {
        const response = await fetch(
          `https://w2024-assign1.glitch.me/api/races/season/${selectedSeason}`
        );
        let racesData = await response.json();
        setRaces(racesData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRacesData();
  }, []);

  const RacesButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    lineHeight: 1.5,
    borderColor: "#0063cc",
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
  });

  return (
    <div className="flex h-5/6 overflow-auto bg-zinc-900 rounded-lg ml-6">
      {!races ? (
        <CircularProgress className="m-8" />
      ) : (
        <Box
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
              // Hide the scrollbar
            },
          }}
          className="text-slate-100 overflow-auto"
        >
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader id="nested-list-subheader">
                <RacesButton variant="text" onClick={() => handleYearButton()}>
                  <p className="text-3xl font-bold">
                    {selectedSeason + " Races"}
                  </p>
                  {/*race.year */}
                </RacesButton>
              </ListSubheader>
            }
          >
            {races.map((race, index) => (
              <RaceItem key={index} index={index} race={race} />
            ))}
          </List>
        </Box>
      )}
    </div>
  );
};

export default RacesSection;
