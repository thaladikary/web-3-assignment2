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

import RaceItem from "./RaceItem";

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
    topDrivers, 
    setTopDrivers
  } = useContext(AppContext);

  const [open, setOpen] = useState(true);
  const [openItems, setOpenItems] = useState([]); // State to track which items are open

  const handleResultsButton = (currRace) => {
    setSelectedRace(currRace);
    console.log(selectedRace)
    setStandingsSelected(false);
    setResultsSelected(true);
    fetchResultData()
  };
  console.log(selectedRace)
  
  const handleYearButton = () => {
    setSelectedSeason(false);
  };
  const handleStandingsButton = () => {
    setResultsSelected(false);
    setStandingsSelected(true);
  };

  const fetchResultData = async () => {
    try {
      const response = await fetch(
        `https://w2024-assign1.glitch.me/api/results/${selectedRace.raceId}`
      );
      let racesData = await response.json();
      const topThreeDrivers = filterResultData(racesData)
      setTopDrivers(topThreeDrivers)
      
    } catch (err) {
      console.log(err);
    }
  };

  const filterResultData = (resultData) => {
    console.log(resultData)
    resultData = resultData.filter(data => data.positionOrder <= 3)
    return resultData;
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
              <RaceItem key={index} index ={index} race={race} resultClick ={handleResultsButton} standingClick = {handleStandingsButton}/>
            ))}
          </List>
        </Box>
      )}
    </div>
  );
};

export default RacesSection;
