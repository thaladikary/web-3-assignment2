import React from "react";
import { useContext } from "react";
import { AppContext } from "../../Context";
import ReactCountryFlag from "react-country-flag";

const Table = ({ data, onDriverClick, onConstructorClick }) => {
  
  // Helper function to render clickable driver span and will also display the driver name 
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
