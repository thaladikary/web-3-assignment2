import React from "react";
import QualifyingTable from "./results_components/QualifyingTable";
import ResultsTable from "./results_components/ResultsTable";
import TopThreeDrivers from "./results_components/TopThreeDrivers";

const ResultsSection = ({ handleConstructorClick, handleDriverClick }) => {
  // This is our results section componet that will have three other components within this that will display only the corresponding results
  // data selected from the race
  return (
    <div className="flex flex-col justify-center items-center w-full space-x-8 space-y-8 ">
      {/* Top 3 drivers display Section */}
      <div className="w-full space-x-8 ml-8 font-bold text-3xl m-2">
        <TopThreeDrivers />
      </div>
      <div className="w-full border-b border-slate-600"></div>
      {/* Results and Qualifying Tables Section */}
      <div className="flex flex-row w-full rounded-md justify-center space-x-2">
        {/* Results Table Section */}
        <div className="flex-2 text-slate-100 rounded-md p-4">
          <h1 className="font-bold text-3xl m-2">Results Table</h1>
          <ResultsTable
            handleDriverClick={handleDriverClick}
            handleConstructorClick={handleConstructorClick}
          />
        </div>

        {/* Qualifying Table Section */}
        <div className="flex-3 text-slate-100 rounded-md p-4">
          <h1 className="font-bold text-3xl m-2">Qualifying Table</h1>
          <QualifyingTable
            handleDriverClick={handleDriverClick}
            handleConstructorClick={handleConstructorClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;
