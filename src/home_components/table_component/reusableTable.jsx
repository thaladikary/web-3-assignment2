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
    setQualifying,
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
    return (
      <span
        className="cursor-pointer hover:underline font-bold"
        onClick={() => onClick(driverObj.driverRef)}
      >
        {driverObj.driver}
      </span>
    );
  };
  const handleSort = (tableType) => {
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
    if (tableType === "qualifying") {
      setQualifying(newData);
    } else {
      setResultsData(newData);
    }

    setIsDescending(!isDescending);
  };

  const renderDNF = (row) => {
    if (row.position === null) {
      return <span className="">DNF</span>;
    } else {
      return;
    }
  };

  // Helper function to render clickable constructor span and will also display the constructor name
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

  // This is our main table that is able to handle Driver,Constructor,Qualifying and Results data.
  //  This is like super table that will take corresponding keys from the object and set that as
  // the table heading. Then from their it will take the values to that corresponding key and print it
  //  out in that field. This will also set a onClick behavior to Driver and Constructor which will be passed
  // from the parent component as props. That will handle fetching the data.

  //Object.keys(data[0]).map will handle setting all the column headers
  //Object.entries(row).map will handle displaying the data for that header/key
  // This will also set onClick behavior to driver and constructor fields
  // and finally the renderDNF will handle if the position has no value and set that to DNF
  return (
    <div className="">
      <table className="">
        <thead className="bg-slate-700">
          <tr className="text-slate-100 border-slate-400">
            {Object.keys(data[0]).map((key, index) => {
              if (data[0].resultsTable) {
                if (key === "position") {
                  return (
                    <th key={index} className="px-8 py-4 text-left">
                      <button
                        onClick={handleSort}
                        className="hover:underline flex"
                      >
                        {isDescending ? (
                          <div className="text-slate-100 hover:underline">
                            {key}
                            <ExpandLess sx={{ fontSize: 24 }} />
                          </div>
                        ) : (
                          <div className="text-slate-100 hover:underline">
                            {key}
                            <ExpandMore sx={{ fontSize: 24 }} />
                          </div>
                        )}
                      </button>
                    </th>
                  );
                }
              }

              if (data[0].qualifyingTable) {
                if (key === "position") {
                  return (
                    <th key={index} className="px-8 py-4 text-left">
                      <button
                        onClick={() => handleSort("qualifying")}
                        className="hover:underline"
                      >
                        {isDescending ? (
                          <div className="text-slate-100 hover:underline">
                            {key}
                            <ExpandLess sx={{ fontSize: 24 }} />
                          </div>
                        ) : (
                          <div className="text-slate-100 hover:underline">
                            {key}
                            <ExpandMore sx={{ fontSize: 24 }} />
                          </div>
                        )}
                      </button>
                    </th>
                  );
                }
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
