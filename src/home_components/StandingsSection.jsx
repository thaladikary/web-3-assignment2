import React from "react";
import DriversTable from "./standings_components/DriversTable";
import ConstructorsTable from "./standings_components/ConstructorsTable";


  // This is our StandingsSection component that will have two other components within this that will display only the corresponding Standing 
  // data selected from the race 
const StandingsSection = ({ handleConstructorClick, handleDriverClick }) => {
  return (
    <div className="flex flex-row justify-center ml-4 w-min rounded-md">
      <div className="h-min p-4 w-max">
        <h1 className="font-bold text-3xl m-2 text-slate-100">
          Driver Standings
        </h1>
        <DriversTable handleDriverClick={handleDriverClick} />
      </div>

      <div className="h-min p-4 w-max">
        <h1 className="font-bold text-3xl m-2 text-slate-100">
          Constructor Standings
        </h1>
        <ConstructorsTable handleConstructorClick={handleConstructorClick} />
      </div>
    </div>
  );
};

export default StandingsSection;
