import { AppContext } from "../../Context";
import { useContext } from "react";
import { CircularProgress } from "@mui/material";
import ReuseableTable from "../table_component/reusableTable";

const DriversTable = ({ handleDriverClick }) => {
  const { driverStandings } = useContext(AppContext);


  // If the driverStandings has no data then it will display loading animation else it will
  // call the ReuseableTable and pass the handleDriverClick and driverStandings as props for the 
  // component to build the driverstanding tables 
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
