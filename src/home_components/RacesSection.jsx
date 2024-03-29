import { useState, useEffect, useContext } from "react";
import { AppContext } from "../Context";
import {
  ListSubheader,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  CircularProgress,
  ListItem,
  Box,
  Button,
} from "@mui/material";

import { ExpandLess, ExpandMore } from "@mui/icons-material";

import AnalyticsIcon from "@mui/icons-material/Analytics";

const RacesSection = () => {
  const { races, setRaces, selectedSeason, setSelectedSeason } =
    useContext(AppContext);

  const [open, setOpen] = useState(true);
  const [openItems, setOpenItems] = useState([]); // State to track which items are open

  // const handleClick = (e) => {
  //   // console.log(e);

  //   // const sel = races.find((c) => c.raceId == id);
  //   setOpen(!open);
  // };

  const handleClick = (index) => {
    setOpenItems((prevState) => {
      const newState = [...prevState]; // Create a copy of the openItems array
      newState[index] = !newState[index]; // Toggle the state of the clicked item
      return newState;
    });
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

  return (
    <div className="h-screen w-screen bg-zinc-900">
      {!races ? (
        // The reason we do this is because we are still waiting for the data to
        // loaded , so we put a loading animation while we wait, if we don't do
        // this then the races state will have undefined
        <CircularProgress className="m-8" />
      ) : (
        <Box className="text-slate-100 overflow-auto w-1/4 h-full">
          <List
            sx={{ width: "100%", maxWidth: 360 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                RACE LIST
              </ListSubheader>
            }
          >
            {races.map((race, index) => (
              <div key={race.id}>
                <ListItemButton onClick={() => handleClick(index)}>
                  <ListItemText primary={race.name} />
                </ListItemButton>
                <Collapse in={openItems[index]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <Button onClick={() => handleButtonClick1(race)}>
                      Button 1
                    </Button>
                    <Button onClick={() => handleButtonClick2(race)}>
                      Button 2
                    </Button>
                  </List>
                </Collapse>
              </div>
            ))}
          </List>
        </Box>
      )}
    </div>
  );
};

export default RacesSection;
