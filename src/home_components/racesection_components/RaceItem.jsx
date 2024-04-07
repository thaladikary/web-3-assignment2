import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../Context";
import { List, ListItemButton, ListItemText, Collapse } from "@mui/material";
import ResultsButton from "./ResultsButton";
import StandingsButton from "./StandingsButton";

const RaceItem = ({ race, index }) => {
 
  const {
    setResultsSelected,
    setTopDrivers,
    setStandingsSelected,
    setQualifying,
    setSelectedRace,
    setResultsData,
    setCircuit,
    setDriverInfo,
  } = useContext(AppContext);


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
