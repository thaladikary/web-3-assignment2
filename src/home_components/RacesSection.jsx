import { useState, useEffect, useContext } from "react";
import { AppContext } from "../Context";

import { CircularProgress, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import RaceItem from "./racesection_components/RaceItem";

//
const RacesSection = () => {
  const [isDescending, setIsDescending] = useState(true);
  const { races, setRaces, selectedSeason } = useContext(AppContext);

  // This will fetch data from our glitch api, the selectedSeason has been set in our filtersection component
  // so now we will use that state in our endpoint
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

  const handleSort = () => {
    const newData = [...races];
    newData.sort((a, b) => {
      if (isDescending) {
        return b.round - a.round;
      } else {
        return a.round - b.round;
      }
    });
    setRaces(newData);
    setIsDescending(!isDescending);
  };

  return (
    <div className="sticky top-0 bg-slate-700 rounded-md text-slate-50 w-max h-max">
      {!races ? (
        <CircularProgress className="m-8" />
      ) : (
        <Box>
          <div className="flex justify-between p-2">
            <div className="text-xl text-slate-400">Race List</div>

            <button onClick={handleSort}>
              {isDescending ? (
                <div className="text-slate-400 hover:underline">
                  <ExpandLessIcon sx={{ fontSize: 32 }} />
                </div>
              ) : (
                <div className="text-slate-400 hover:underline">
                  <ExpandMoreIcon sx={{ fontSize: 32 }} />
                </div>
              )}
            </button>
          </div>

          {races.map((race, index) => (
            <RaceItem key={index} index={index} race={race} />
          ))}
        </Box>
      )}
    </div>
  );
};

export default RacesSection;
