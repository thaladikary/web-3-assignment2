import React from "react";
import { AppContext } from "../../Context";
import { useState, useEffect, useContext } from "react";
import ReactCountryFlag from "react-country-flag"

const QualifyingTable = () => {
  const { selectedRace, setSelectedRace, qualifyingData,setQualifying } = useContext(AppContext);
  
  //fetchQualifyingtData()
  
  console.log(qualifyingData)


  return(
  <div>
    <ReactCountryFlag countryCode="GB" svg className=""/>
  </div>);
};

export default QualifyingTable;
