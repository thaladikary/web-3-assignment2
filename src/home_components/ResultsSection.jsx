import React from "react";
import { AppContext } from "../Context";
import { useContext } from "react";
import QualifyingTable from "./results_components/QualifyingTable";
import { Box } from "@mui/material";
import ResultsTable from "./results_components/ResultsTable";
import TopThreeDrivers from "./results_components/TopThreeDrivers";

const ResultsSection = () => {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <div className="w-auto h-1/5 bg-zinc-900 rounded-lg m-6">
        <TopThreeDrivers />
      </div>
      <div className="w-auto h-1/3 bg-zinc-900 rounded-lg m-6">
        <ResultsTable />
      </div>
      <div className="w-auto h-1/3 bg-zinc-900 rounded-lg m-6">
        <QualifyingTable />
      </div>
    </Box>
  );
};

export default ResultsSection;
