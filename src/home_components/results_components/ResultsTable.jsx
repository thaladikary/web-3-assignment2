import React from "react";
import { AppContext } from "../../Context";
import { useState, useEffect, useContext } from "react";
import ReactCountryFlag from "react-country-flag";
import ReuseableTable from "../table_component/reusableTable";
import { CircularProgress } from "@mui/material";

const ResultsTable = () => {
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

  const handleDriverClick = (driver) => {
    fetchDriverData(driver);
    setDriverModalOpen(true);
  };

  const handleConstructorClick = (constructor) => {
    // Handle click on constructor here
    // console.log("Constructor clicked:", constructor);
    fetchConstructorData(constructor);
    setConstructorModalOpen(true);
  };
  const handleCircuitClick = (circuit) => {
    // Handle click on constructor here
    setCircuitModalOpen(true);
    // console.log("Circuit clicked:", circuit);
  };

  const fetchConstructorData = async (constructorRef) => {
    try {
      const response = await fetch(
        `https://w2024-assign1.glitch.me/api/constructors/${constructorRef}`
      );

      let constructorData = await response.json();
      setCurrentConstructor(constructorData);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchDriverData = async (driverRef) => {
    try {
      const response = await fetch(
        `https://w2024-assign1.glitch.me/api/drivers/${driverRef}`
      );

      let driverData = await response.json();
      setDriverData(driverData);
    } catch (err) {
      console.log(err);
    }
  };

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
