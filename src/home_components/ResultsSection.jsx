import React from "react";
import { AppContext } from "../Context";
import { useContext } from "react";
import QualifyingTable from "./results_components/QualifyingTable";
import { Box } from "@mui/material";
import ResultsTable from "./results_components/ResultsTable";
import TopThreeDrivers from "./results_components/TopThreeDrivers";
import Modal from '@mui/material/Modal';
import DriverModal from "./modal_components/DriverModal";



const ResultsSection = () => {
  const {  modalOpen} = useContext(AppContext);
  return (
    <Box className="w-max space-y-6 flex flex-col">
      <div className="flex justify-evenly w-full bg-zinc-900 rounded-md">
        <TopThreeDrivers />
      </div>
      <div className="flex w-full justify-center  space-x-4">
        <div className="text-slate-100 rounded-md">
          <h1>Results Table</h1>
          <ResultsTable />
        </div>
        <div className="w-full rounded-md">
          <h1 className="text-slate-100 rounded-md">Qualifying Table</h1>
          <QualifyingTable />
        </div>
        <div className="Modal">
            <DriverModal/> 
        </div>
      </div>
    </Box>
  );
};

export default ResultsSection;
