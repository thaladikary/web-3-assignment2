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
  } = useContext(AppContext);

  const handleDriverClick = (driver) => {
    fetchDriverData(driver);
    setOpenModal(true);
    console.log("Driver clicked:", driver);
  };

  const handleConstructorClick = (constructor) => {
    // Handle click on constructor here
    console.log("Constructor clicked:", constructor);
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

  console.log(driverData);
  console.log(circuit);

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
