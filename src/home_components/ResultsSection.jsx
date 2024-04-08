import React from "react";
import { AppContext } from "../Context";
import { useContext } from "react";
import QualifyingTable from "./results_components/QualifyingTable";
import ResultsTable from "./results_components/ResultsTable";
import TopThreeDrivers from "./results_components/TopThreeDrivers";
import Modal from "@mui/material/Modal";
import DriverModal from "./modal_components/DriverModal";

const ResultsSection = ({ handleConstructorClick, handleDriverClick }) => {
  const {
    selectedRace,
    setSelectedRace,
    resultsData,
    setResultsData,
    driverData,
    setDriverData,
    circuit,
    setCircuit,
    setOpenModal,
    driverModal,
    setDriverModalOpen,
    constructorModal,
    setConstructorModalOpen,
    circuitModal,
    setCircuitModalOpen,
    setCurrentConstructor,
  } = useContext(AppContext);

  return (
    <div className="flex flex-col justify-center items-center w-full space-x-8 space-y-8 ">
      {/* Top 3 drivers display Section */}
      <div className="w-full space-x-8 ml-8">
        <TopThreeDrivers />
      </div>
      <div className="w-full border-b border-slate-600"></div>
      {/* Results and Qualifying Tables Section */}
      <div className="flex flex-row w-full rounded-md justify-center space-x-2">
        {/* Results Table Section */}
        <div className="flex-2 text-slate-100 rounded-md p-4">
          <h1 className="font-bold text-3xl m-2">Results Table</h1>
          <ResultsTable
            handleDriverClick={handleDriverClick}
            handleConstructorClick={handleConstructorClick}
          />
        </div>

        {/* Qualifying Table Section */}
        <div className="flex-3 text-slate-100 rounded-md p-4">
          <h1 className="font-bold text-3xl m-2">Qualifying Table</h1>
          <QualifyingTable
            handleDriverClick={handleDriverClick}
            handleConstructorClick={handleConstructorClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;
