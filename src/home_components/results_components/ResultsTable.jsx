import React from "react";
import { AppContext } from "../../Context";
import { useState, useEffect, useContext } from "react";
import ReactCountryFlag from "react-country-flag";
import ReuseableTable from "../table_component/reusableTable";
import { CircularProgress } from "@mui/material";

const ResultsTable = ({ handleDriverClick, handleConstructorClick }) => {
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


  
  // If the resultsData and driverData has no data then it will display nothing else it will
  // call the ReuseableTable and pass the handleDriverClick,handleConstructorClick and resultsData as props for the 
  // component to build the ResultsTable  
  return (
    <div className="">
      {!resultsData && !driverData ? (
        // <CircularProgress className="m-8" />
        <div> </div>
      ) : (
        <ReuseableTable
          data={resultsData}
          onDriverClick={handleDriverClick}
          onConstructorClick={handleConstructorClick}
        />
      )}
    </div>
  );
};

export default ResultsTable;
