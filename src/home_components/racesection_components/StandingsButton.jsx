import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../Context";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import { Button } from "@mui/material";

const StandingsButton = ({ race }) => {
  const {
    setResultsSelected,

    setStandingsSelected,
  } = useContext(AppContext);

  const handleStandingsButton = () => {
    setResultsSelected(false);
    setStandingsSelected(true);
  };

  return (
    <Button
      sx={{
        color: "white",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          width: "100%",
        },
      }}
      onClick={() => handleStandingsButton(race)}
    >
      <h1 className="pl-4 pr-4 text-slate-400">Standings</h1>
      <SportsScoreIcon sx={{ fontSize: 40 }} />
    </Button>
  );
};

export default StandingsButton;
