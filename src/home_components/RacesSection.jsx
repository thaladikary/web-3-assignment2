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

import { ExpandLess, ExpandMore} from "@mui/icons-material";

import AnalyticsIcon from "@mui/icons-material/Analytics";
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import FilterSection from "../home_components/FilterSection";



const RacesSection = () => {
  const { races, setRaces, selectedSeason, setSelectedSeason } = useContext(AppContext);

  const [open, setOpen] = useState(true);
  const [openItems, setOpenItems] = useState([]); // State to track which items are open

  console.log(selectedSeason)

  const handleResultsButton = (currRace) => {
    // console.log(e);

    // const sel = races.find((c) => c.raceId == id);
    //return setSelectedSeason(false)
  
  };

  const handleYearButton = () => {
    return setSelectedSeason(false)
  } 

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
        <Box className="text-slate-100 overflow-auto w-1/4 h-1/2">
          <List
            sx={{ width: "100%", maxWidth: 360 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                <Button onClick={() => handleYearButton()}>
                    {selectedSeason + ' Races'}
                    {/*race.year */}
                </Button>
              </ListSubheader>
            }
          >
            {races.map((race, index) => (
              <div key={race.id}>
                <ListItemButton onClick={() => handleClick(index)}>
                  <ListItemText primary={race.name} />
                </ListItemButton>
                <Collapse in={openItems[index]} timeout="auto" unmountOnExit>
                  <List component="div">
                    <Button onClick={() => handleButtonClick1(race)}>
                      <h1 className="pl-4 pr-4">Results</h1>
                      <AnalyticsIcon sx={{fontSize:40}}/>
                    </Button> 
                  </List>
                  <List component="div">
                    <Button onClick={() => handleStandingsButton(race)}>
                    <h1 className="pl-4 pr-4">Standings</h1>
                      <SportsScoreIcon sx={{fontSize:40}}/>
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
