import React from "react";
import { useContext } from "react";

import { AppContext } from "../../Context";
import ReuseableTable from "../table_component/reusableTable";
import { CircularProgress } from "@mui/material";

const ConstructorsTable = ({ handleConstructorClick }) => {
  const { constructorStandings } = useContext(AppContext);


  // If the constructorStandings has no data then it will display loading animation else it will
  // call the ReuseableTable and pass the handleConstructorClick and constructorStandings as props for the 
  // component to build the constructorstanding tables 
  return (
    <div>
      {!constructorStandings ? (
        <CircularProgress className="m-8" />
      ) : (
        <ReuseableTable
          onConstructorClick={handleConstructorClick}
          data={constructorStandings}
        />
      )}
    </div>
  );
};

export default ConstructorsTable;
