import { AppContext } from "../../Context";
import { useContext } from "react";
import { CircularProgress } from "@mui/material";
import ReuseableTable from "../table_component/reusableTable";

const DriversTable = ({ handleDriverClick }) => {
  const { driverStandings } = useContext(AppContext);

  return (
    <div>
      {" "}
      <div>
        {!driverStandings ? (
          <CircularProgress className="m-8" />
        ) : (
          <ReuseableTable
            onDriverClick={handleDriverClick}
            data={driverStandings}
          />
        )}
      </div>
    </div>
  );
};

export default DriversTable;
