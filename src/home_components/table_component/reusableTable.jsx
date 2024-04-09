import React from "react";
import { useContext } from "react";
import { AppContext } from "../../Context";
import ReactCountryFlag from "react-country-flag";
import { ExpandLess } from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";

const Table = ({ data, onDriverClick, onConstructorClick }) => {
  const [isDescending, setIsDescending] = useState(true);

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

  // Helper function to render clickable driver span
  const renderDriver = (driverObj, onClick) => {
    // console.log(driverObj)
    return (
      <span
        className="cursor-pointer hover:underline font-bold"
        onClick={() => onClick(driverObj.driverRef)}
      >
        {driverObj.driver}
      </span>
    );
  };
  const handleSortResult = (row) => {
    console.log(data);
    const newData = [...data];
    newData.sort((a, b) => {
      if (a.position === null && b.position === null) {
        return 0;
      } else if (a.position === null) {
        return 1;
      } else if (b.position === null) {
        return -1;
      } else if (isDescending) {
        return b.position - a.position;
      } else {
        return a.position - b.position;
      }
    });
    setResultsData(newData);
    setIsDescending(!isDescending);
  };

  const renderDNF = (row) => {
    if (row.position === null) {
      return <span className="">DNF</span>;
    } else {
      return;
    }
  };

  // Helper function to render clickable constructor span
  const renderConstructor = (constructor, onClick) => {
    return (
      <span
        className="cursor-pointer hover:underline font-bold"
        onClick={() => onClick(constructor.constructorRef)}
      >
        {constructor.constructor}
      </span>
    );
  };

  return (
    <div className="">
      <table className="">
        <thead className="bg-slate-700">
          <tr className="text-slate-100 border-slate-400">
            {Object.keys(data[0]).map((key, index) => {
              if (key == "position") {
                return (
                  <th key={index} className="px-8 py-4 text-left">
                    <button
                      onClick={handleSortResult}
                      className="hover:underline"
                    >
                      {key}
                      <ExpandLess />
                    </button>
                  </th>
                );
              }
              if (key !== "driverRef" && key !== "constructorRef") {
                return (
                  <th key={index} className="px-8 py-4 text-left">
                    {key}
                  </th>
                );
              } else {
                return null;
              }
            })}
          </tr>
        </thead>
        <tbody className="text-slate-200">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={
                rowIndex % 2 === 0
                  ? "table-color  border-b border-slate-600"
                  : "table-color  border-b border-slate-600"
              }
            >
              {Object.entries(row).map(([key, value], colIndex) => {
                if (key !== "driverRef" && key !== "constructorRef") {
                  return (
                    <td key={colIndex} className="px-4 py-4">
                      {key === "driver"
                        ? renderDriver(row, onDriverClick)
                        : key === "constructor"
                        ? renderConstructor(row, onConstructorClick)
                        : key === "position" && value === null
                        ? renderDNF(row)
                        : value}
                    </td>
                  );
                } else {
                  return null;
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
