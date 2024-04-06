import React from "react";
import { useContext } from "react";
import { AppContext } from "../../Context";
import ReactCountryFlag from "react-country-flag";

const Table = ({ data, onDriverClick, onConstructorClick }) => {
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
                  ? "table-color  border-b border-slate-400"
                  : "table-color  border-b border-slate-400"
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
