import React from "react";
import DriversTable from "./standings_components/DriversTable";
import ConstructorsTable from "./standings_components/ConstructorsTable";

const StandingsSection = () => {
  return (
    <div className="flex flex-row space-x-24 ml-4 border-2 w-full justify-center">
      <div className="">
        <h1 className="font-bold text-3xl m-2 text-slate-100">
          Driver Standings
        </h1>
        <DriversTable />
      </div>
      <div className="">
        <div className="">
          <h1 className="font-bold text-3xl m-2 text-slate-100">
            Constructor Standings
          </h1>
          <ConstructorsTable />
        </div>
      </div>
    </div>
  );
};

export default StandingsSection;
