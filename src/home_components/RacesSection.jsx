import { useState, useEffect, useContext } from "react";
import { AppContext } from "../Context";
import {
  ListSubheader,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  CircularProgress

} from "@mui/material";

import{

 ExpandLess,
 ExpandMore,
 
} from '@mui/icons-material';

import AnalyticsIcon from '@mui/icons-material/Analytics';

const RacesSection = () => {
  const {races,setRaces,selectedSeason, setSelectedSeason } = useContext(AppContext);
  const [open, setOpen] = useState(true);

  const handleClick = (race) => {
    const sel = race.find(c => c.id == id);
    console.log(race)
    //setOpen(!open);
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
    }

    fetchRacesData();
  },[]);
  console.log(races)






  return (
    <div className="h-screen w-screen bg-zinc-500">

      {!races ? (
        // The reason we do this is because we are still waiting for the data to 
        // loaded , so we put a loading animation while we wait, if we don't do 
        // this then the races state will have undefined 
        <CircularProgress className="m-8" />
      ) : (
        <List
      
        sx={{ width: '100%', maxWidth: 360 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" >
            RACE LIST
          </ListSubheader>
        }
        >
        {races.map((race) => (
           <ListItemButton key={race.id} onClick={ () => handleClick(race)}>

          
            <ListItemText primary={race.name}/>
            {/* {open ? <ExpandLess /> : <ExpandMore />} */}

          </ListItemButton>
        ))}  
      

      </List>
      )}
    </div>
  );
};

export default RacesSection;
