import { AppContext } from "../../Context";
import { useContext } from "react";
import { CircularProgress } from "@mui/material";
import ReuseableTable from "../table_component/reusableTable";

const DriversTable = () => {
  const { driverStandings } = useContext(AppContext);

  return (
    <div>
      {" "}
      <div>
        {!driverStandings ? (
          <CircularProgress className="m-8" />
        ) : (
          <ReuseableTable data={driverStandings} />
        )}
      </div>
    </div>
  );
};

export default DriversTable;
