import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

const FilterSection = () => {
  useEffect(() => {
    fetch("https://w2024-assign1.glitch.me/api/seasons").then();
  }, [third]);

  const years = Array.from({ length: 11 }, (_, index) => 2020 + index);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-zinc-900">
      <h1 className="text-slate-100 text-center font-bold text-4xl">
        Select a season to begin
      </h1>
      <Box
        margin="25px"
        color="gray"
        maxHeight="100px"
        overflow="auto"
        textAlign="center"
        sx={{
          "&::-webkit-scrollbar": {
            display: "none", // Hide the scrollbar
          },
        }}
      >
        <List>
          {years.map((year) => (
            <ListItem
              key={year}
              button
              sx={{ "&:hover": { bgcolor: "#f5f5f5" } }}
            >
              <ListItemText>
                <Typography variant="h6" style={{ fontSize: "2.5rem" }}>
                  {year}
                </Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
};

export default FilterSection;
