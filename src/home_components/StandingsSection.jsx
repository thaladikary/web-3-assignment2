import React from "react";
import DriversTable from "./standings_components/DriversTable";
import ConstructorsTable from "./standings_components/ConstructorsTable";

const StandingsSection = () => {
  return (
    <div>
      <div className="w-5/6 h-1/3 bg-zinc-900 rounded-lg m-6">
        <DriversTable />
      </div>
      <div className="w-5/6 h-1/3 bg-zinc-900 rounded-lg m-6">
        <ConstructorsTable />
      </div>
    </div>
  );
};

export default StandingsSection;
