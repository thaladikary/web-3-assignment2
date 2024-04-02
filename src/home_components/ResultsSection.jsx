import React from "react";
import { AppContext } from "../Context";
import { useContext } from "react";
import QualifyingTable from "./results_components/QualifyingTable";
import { Box } from "@mui/material";
import ResultsTable from "./results_components/ResultsTable";
import TopThreeDrivers from "./results_components/TopThreeDrivers";

const ResultsSection = () => {
  return (
    <Box className="w-full h-screen space-y-6">
      <div className="w-auto h-content bg-zinc-900 rounded-md  overflow-auto">
        <TopThreeDrivers />
      </div>
      <div className="w-auto h-1/3 bg-zinc-900 rounded-md  overflow-auto">
        <ResultsTable />
      </div>
      <div className="w-auto h-1/3 bg-zinc-900 rounded-md  overflow-auto">
        <QualifyingTable />
      </div>
    </Box>
  );
};

export default ResultsSection;
