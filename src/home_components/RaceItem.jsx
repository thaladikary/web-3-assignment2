import { useState } from "react";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
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


const RaceItem = ({race,index,resultClick,standingClick}) => {
  const [openItems, setOpenItems] = useState([]);

  const handleClick = (index) => {
    setOpenItems((prevState) => {
      const newState = [...prevState]; // Create a copy of the openItems array
      newState[index] = !newState[index]; // Toggle the state of the clicked item
      return newState;
    })
  }
  
  return (
    <div>
      <ListItemButton onClick={() => handleClick(index)}>
                  <ListItemText primary={race.name} />
      </ListItemButton>
  
      <Collapse in={openItems[index]} timeout="auto" unmountOnExit>
        
        <List component="div">
          <Button onClick={() => resultClick(race)}>
            <h1 className="pl-4 pr-4">Results</h1>
            <AnalyticsIcon sx={{ fontSize: 40 }} />
          </Button>
        </List>

        <List component="div">
          <Button onClick={() => standingClick(race)}>
            <h1 className="pl-4 pr-4">Standings</h1>
            <SportsScoreIcon sx={{ fontSize: 40 }} />
          </Button>
        </List>
      </Collapse>
    </div>
  )
}

export default RaceItem