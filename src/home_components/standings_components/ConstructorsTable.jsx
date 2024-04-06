import React from "react";
import { useContext } from "react";

import { AppContext } from "../../Context";
import ReuseableTable from "../table_component/reusableTable";
import { CircularProgress } from "@mui/material";

const ConstructorsTable = ({ handleConstructorClick }) => {
  const { constructorStandings } = useContext(AppContext);

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
