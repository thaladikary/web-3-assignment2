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
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import FilterSection from "../home_components/FilterSection";
import { styled } from "@mui/material/styles";

const RacesSection = () => {
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
  } = useContext(AppContext);

  const [open, setOpen] = useState(true);
  const [openItems, setOpenItems] = useState([]); // State to track which items are open

  const handleResultsButton = (currRace) => {
    // console.log(e);
    // const sel = races.find((c) => c.raceId == id);
    setSelectedRace(currRace);
    setStandingsSelected(false);
    setResultsSelected(true);
  };

  const handleYearButton = () => {
    setSelectedSeason(false);
  };
  const handleStandingsButton = () => {
    setResultsSelected(false);
    setStandingsSelected(true);
  };

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

  const RacesButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    // padding: "6px 12px",
    lineHeight: 1.5,
    // backgroundColor: "#0063cc",
    borderColor: "#0063cc",
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    // "&:active": {
    //   boxShadow: "none",
    //   backgroundColor: "#0062cc",
    //   borderColor: "#005cbf",
    // },
    // "&:focus": {
    //   boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    // },
  });

  return (
    <div className="flex h-5/6 overflow-auto bg-zinc-900 rounded-lg ml-6">
      {!races ? (
        // The reason we do this is because we are still waiting for the data to
        // loaded , so we put a loading animation while we wait, if we don't do
        // this then the races state will have undefined
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
                display: "none", // Hide the scrollbar
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
              <div key={race.raceId}>
                <ListItemButton onClick={() => handleClick(index)}>
                  <ListItemText primary={race.name} />
                </ListItemButton>
                <Collapse in={openItems[index]} timeout="auto" unmountOnExit>
                  <List component="div">
                    <Button onClick={() => handleResultsButton(race)}>
                      <h1 className="pl-4 pr-4">Results</h1>
                      <AnalyticsIcon sx={{ fontSize: 40 }} />
                    </Button>
                  </List>
                  <List component="div">
                    <Button onClick={() => handleStandingsButton(race)}>
                      <h1 className="pl-4 pr-4">Standings</h1>
                      <SportsScoreIcon sx={{ fontSize: 40 }} />
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
