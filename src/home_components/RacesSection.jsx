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
    <div className="sticky top-0 flex bg-slate-800 rounded-md text-slate-50 w-content">
      {!races ? (
        // <CircularProgress className="m-8" />
        <div></div>
      ) : (
        <Box
          className="sticky top-0"
          // sx={{
          //   "&::-webkit-scrollbar": {
          //     display: "none",
          //     // Hide the scrollbar
          //   },
          // }}
        >
          {/* <List
            sx={{
              width: "100%",
              // "&::-webkit-scrollbar": {
              //   display: "none",
              // },
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader id="nested-list-subheader">
                <button
                  className="text-xl bg-sky-500 hover:bg-sky-700 text-slate-50 p-2 rounded-md w-full"
                  onClick={() => handleYearButton()}
                >
                  {selectedSeason + " Races"}
                </button>
              </ListSubheader>
            }
          > */}
          {/* <h1 className="text-center text-sky-200 text-3xl m-2">
            List of races
          </h1> */}

          {races.map((race, index) => (
            <RaceItem key={index} index={index} race={race} />
          ))}
          {/* </List> */}
        </Box>
      )}
    </div>
  );
};

export default RacesSection;
