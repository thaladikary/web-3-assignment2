import React from "react";
import { AppContext } from "../../Context";
import { useState, useEffect, useContext } from "react";
import ReactCountryFlag from "react-country-flag";
import ReuseableTable from "../table_component/reusableTable";

import { CircularProgress } from "@mui/material";

const QualifyingTable = () => {
  const { selectedRace, setSelectedRace, qualifyingData, setQualifying } =
    useContext(AppContext);

  const handleDriverClick = (driver) => {
    // Handle click on driver here
    // console.log("Driver clicked:", driver);
  };

  const handleConstructorClick = (constructor) => {
    // Handle click on constructor here
    // console.log("Constructor clicked:", constructor);
  };

  // console.log(qualifyingData);

  return (
    <div className="">
      {!qualifyingData ? (
        <CircularProgress className="m-8" />
      ) : (
        <ReuseableTable
          data={qualifyingData}
          onDriverClick={handleDriverClick}
          onConstructorClick={handleConstructorClick}
        />
      )}

      {/* <ReuseableTable data={qualifyingData}/> */}
    </div>
  );
};

export default QualifyingTable;
