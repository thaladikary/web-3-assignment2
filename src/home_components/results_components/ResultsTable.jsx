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

  return (
    <div className="">
      {!resultsData && !driverData ? (
        <CircularProgress className="m-8" />
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
