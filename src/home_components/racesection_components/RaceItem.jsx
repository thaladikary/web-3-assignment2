import { useState } from "react";
import { List, ListItemButton, ListItemText, Collapse } from "@mui/material";
import ResultsButton from "./ResultsButton";
import StandingsButton from "./StandingsButton";

const RaceItem = ({ race, index }) => {
  const [openItems, setOpenItems] = useState([]);

  // This will handle when race is selected it will create drop down view containing our ResultsButton and StandingsButton components
  const handleClick = (index) => {
    setOpenItems((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  // This is our RaceItem filter which will act as our sidebar which will have our ResultsButton and StandingsButton component
  // These will also pass the race as a prop.
  return (
    <div className="">
      <div className="hover:bg-slate-600 hover:rounded-md">
        <ListItemButton
          className="flex space-x-2"
          onClick={() => handleClick(index)}
        >
          {/* <ListItemText primary={[race.round, race.name]} /> */}
          <div className="text-slate-400">{race.round}</div>
          <div className="">{race.name}</div>
        </ListItemButton>
      </div>

      <div className="">
        <Collapse in={openItems[index]} timeout="auto" unmountOnExit>
          <List component="div">
            <ResultsButton race={race} />
          </List>

          <List component="div">
            <StandingsButton race={race} />
          </List>
        </Collapse>
      </div>
    </div>
  );
};

export default RaceItem;
