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
  const { races, setRaces, selectedSeason, setSelectedSeason } =
    useContext(AppContext);

  const handleYearButton = () => {
    setSelectedSeason(false);
  };

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
