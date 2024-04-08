import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../Context";
import { List, ListItemButton, ListItemText, Collapse } from "@mui/material";
import ResultsButton from "./ResultsButton";
import StandingsButton from "./StandingsButton";

const RaceItem = ({ race, index }) => {
  const [openItems, setOpenItems] = useState([]);

  const handleClick = (index) => {
    setOpenItems((prevState) => {
      const newState = [...prevState]; // create copy of the open items array
      newState[index] = !newState[index]; // toggle the state of the clicked item
      return newState;
    });
  };

  return (
    <div className="">
      <div className="hover:bg-slate-600 hover:rounded-md">
        {" "}
        <ListItemButton onClick={() => handleClick(index)}>
          <ListItemText primary={[race.round, ". ", race.name]} />
        </ListItemButton>
      </div>

      <div className="">
        {" "}
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
