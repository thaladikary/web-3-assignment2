import { useEffect, useContext } from "react";
import { AppContext } from "../Context";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const FilterSection = ({ supabase }) => {
  const {
    seasons,
    setSeasons,
    selectedSeason,
    setSelectedSeason,
    setSelectedRace,
    setResultsData,
  } = useContext(AppContext);

  useEffect(() => {
    const fetchSeasonsData = async () => {
      try {
        const response = await fetch(
          `https://w2024-assign1.glitch.me/api/seasons`
        );
        let seasonData = await response.json();
        seasonData = filterSeasonData(seasonData);
        setSeasons(seasonData);
      } catch (err) {
        console.log(err);
      }
      // const { data, error } = await supabase.from("seasons").select();
      // const seasonData = filterSeasonData(data);
      // setSeasons(seasonData);
    };

    fetchSeasonsData();
  }, []);

  const updateSelectedData = (year) => {};

  const filterSeasonData = (seasonData) => {
    seasonData = seasonData.filter(
      (data) => data.year >= 2000 && data.year <= 2023
    );
    seasonData = seasonData.sort((a, b) => b.year - a.year);
    return seasonData;
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-zinc-900">
      <h1 className="text-slate-100 text-center font-bold text-4xl">
        Select a season to begin
      </h1>
      {!seasons ? (
        <CircularProgress className="m-8" />
      ) : (
        <Box
          className="m-4 h-1/4 overflow-auto text-center text-slate-300"
          sx={{
            "&::-webkit-scrollbar": {
              display: "none", // Hide the scrollbar
            },
          }}
        >
          <List>
            {seasons.map((season) => (
              <ListItem
                key={season.year}
                button
                sx={{
                  "&:hover": {
                    bgcolor: "#adadad",
                    borderRadius: "5px",
                  },
                }}
                onClick={() => setSelectedSeason(season.year)}
              >
                <ListItemText>
                  <Typography variant="h6" style={{ fontSize: "2.5rem" }}>
                    {season.year}
                  </Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </div>
  );
};

export default FilterSection;
