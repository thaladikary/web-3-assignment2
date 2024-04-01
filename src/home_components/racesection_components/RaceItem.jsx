import { useState } from "react";
import { List, ListItemButton, ListItemText, Collapse } from "@mui/material";
import ResultsButton from "./ResultsButton";
import StandingsButton from "./StandingsButton";

const RaceItem = ({ race, index }) => {
  const [openItems, setOpenItems] = useState([]);

  const handleClick = (index) => {
    setOpenItems((prevState) => {
      // Create a copy of the openItems array
      const newState = [...prevState];
      // Toggle the state of the clicked item
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div>
      <ListItemButton onClick={() => handleClick(index)}>
        <ListItemText primary={race.name} />
      </ListItemButton>

      <Collapse in={openItems[index]} timeout="auto" unmountOnExit>
        <List component="div">
          <ResultsButton race={race} />
        </List>

        <List component="div">
          <StandingsButton race={race} />
        </List>
      </Collapse>
    </div>
  );
};

export default RaceItem;
