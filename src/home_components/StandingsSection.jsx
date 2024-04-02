import React from "react";
import DriversTable from "./standings_components/DriversTable";
import ConstructorsTable from "./standings_components/ConstructorsTable";

const StandingsSection = () => {
  return (
    <div className="flex flex  space-x-4">
      <div className="">
        <h1 className="text-slate-200">Driver Standings</h1>
        <DriversTable />
      </div>
      <div className="">
        <div className="">
          <h1 className="text-slate-200">Constructor Standings</h1>
          <ConstructorsTable />
        </div>
      </div>
    </div>
  );
};

export default StandingsSection;
