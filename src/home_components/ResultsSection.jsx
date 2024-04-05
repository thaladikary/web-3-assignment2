import React from "react";
import { AppContext } from "../Context";
import { useContext } from "react";
import QualifyingTable from "./results_components/QualifyingTable";
import { Box } from "@mui/material";
import ResultsTable from "./results_components/ResultsTable";
import TopThreeDrivers from "./results_components/TopThreeDrivers";
import Modal from "@mui/material/Modal";
import DriverModal from "./modal_components/DriverModal";

const ResultsSection = () => {
  const { modalOpen } = useContext(AppContext);

  return (
    <div className="flex flex-col justify-center items-center w-full space-x-8 space-y-8">
      {/* Top 3 drivers display Section */}
      <div className="w-full flex justify-center border-2 ml-8">
        <TopThreeDrivers />
      </div>

      {/* Results and Qualifying Tables Section */}
      <div className="flex flex-row w-full border-2 justify-center space-x-4">
        {/* Results Table Section */}
        <div className="flex-2 text-slate-100 rounded-md overflow">
          <h1 className="font-bold text-3xl m-2">Results Table</h1>
          <ResultsTable />
        </div>

        {/* Qualifying Table Section */}
        <div className="flex-3 text-slate-100 rounded-md">
          <h1 className="font-bold text-3xl m-2">Qualifying Table</h1>
          <QualifyingTable />
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;
