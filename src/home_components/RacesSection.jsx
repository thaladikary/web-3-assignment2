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

const RacesSection = () => {
  const { races, setRaces, selectedSeason, setSelectedSeason } =
    useContext(AppContext);

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

  return (
    <div className="sticky top-0 bg-slate-700 rounded-md text-slate-50 w-max h-max">
      {!races ? (
        // <CircularProgress className="m-8" />
        <div></div>
      ) : (
        <Box>
          {races.map((race, index) => (
            <RaceItem key={index} index={index} race={race} />
          ))}
        </Box>
      )}
    </div>
  );
};

export default RacesSection;
