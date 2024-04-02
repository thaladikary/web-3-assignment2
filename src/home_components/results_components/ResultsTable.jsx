import React from "react";
import { AppContext } from "../../Context";
import { useState, useEffect, useContext } from "react";
import ReactCountryFlag from "react-country-flag"
import ReuseableTable from '../table_component/reusableTable'

import {
  CircularProgress,
} from "@mui/material";




const ResultsTable = () => {

  const { selectedRace, setSelectedRace,resultsData,setResultsData, } = useContext(AppContext);
  
  
  return (
    <div>
      {!resultsData ? 
        (
          <CircularProgress className="m-8" />) :(
          <ReuseableTable data={resultsData}/> 
          
          )
        
        }
        
        </div>    
   );
};

export default ResultsTable;
