import React from "react";
import { AppContext } from "../Context";
import { useContext } from "react";
import QualifyingTable from "./results_components/QualifyingTable";
import { Box } from "@mui/material";
import ResultsTable from "./results_components/ResultsTable";
import TopThreeDrivers from "./results_components/TopThreeDrivers";
import Modal from "@mui/material/Modal";

const ResultsSection = () => {
  const { modalOpen } = useContext(AppContext);
  return (
    <Box className="w-max space-y-6 flex flex-col">
      <div className="flex justify-evenly w-full bg-zinc-900 rounded-md">
        <TopThreeDrivers />
      </div>
      <div className="flex w-full justify-center space-x-4">
        {/*parent for race results & qual */}
        <div className="text-slate-100 rounded-md">
          <h1 className="font-bold">Results Table</h1>
          <ResultsTable />
        </div>
        <div className="h-full border-2 border-slate-400"></div>
        <div className="text-slate-100 rounded-md">
          <h1 className="font-bold">Qualifying Table</h1>
          <QualifyingTable />
        </div>
        <div className="Modal">
          <Modal open={modalOpen}>
            <div className="text-white">Modal</div>
          </Modal>
        </div>
      </div>
    </Box>
  );
};

export default ResultsSection;
