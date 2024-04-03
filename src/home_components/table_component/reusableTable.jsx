import React from "react";
import { useContext } from "react";
import { AppContext } from "../../Context";
import ReactCountryFlag from "react-country-flag";

const Table = ({ data,onDriverClick, onConstructorClick  }) => {


  // Helper function to render clickable driver span
  const renderDriver = (driverObj, onClick) => {
    // console.log(driverObj)
    return (
      <span onClick={() => onClick(driverObj.driverRef)}>
        {driverObj.driver}
      </span>
    );
  };


  // Helper function to render clickable constructor span
  const renderConstructor = (constructor, onClick) => {
    return (
      <span onClick={() => onClick(constructor)}>
        {constructor} 
      </span>
    );
  };


  
  return (
    <div className="h-content w-max">
      <table className="table-auto border-collapse h-content">
        <thead className="bg-slate-800">
          <tr className="text-slate-100 border-slate-400">
            {Object.keys(data[0]).map((key, index) => (
              <th key={index} className="px-4 py-2 text-left" >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-slate-200">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={
                rowIndex % 2 === 0
                  ? "table-color  border-b border-slate-800"
                  : "table-color  border-b border-slate-800"
              }
            >
              {Object.entries(row).map(([key, value], colIndex) => (
                <td key={colIndex} className="px-4 py-4">
                 {key === "driver"
                    ? renderDriver(row, onDriverClick)
                : key === "constructor"
                    ? renderConstructor(value, onConstructorClick)
                    : value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
