import React from "react";
import { AppContext } from "../../Context";
import { useState, useEffect, useContext } from "react";
import ReactCountryFlag from "react-country-flag";
import ReuseableTable from "../table_component/reusableTable";

import { CircularProgress } from "@mui/material";

const QualifyingTable = ({
  handleDriverClick,
  handleConstructorClick,
  driverData,
}) => {
  const { selectedRace, setSelectedRace, qualifyingData, setQualifying } =
    useContext(AppContext);



  // If the resultsData and driverData has no data then it will display nothing else it will
  // call the ReuseableTable and pass the handleDriverClick,handleConstructorClick and qualifyingData as props for the 
  // component to build the ResultsTable 
  return (
    <div className="">
      {!qualifyingData && !driverData ? (
        // <CircularProgress className="m-8" />
        <div></div>
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
