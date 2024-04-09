import { useContext } from "react";
import { AppContext } from "../../Context";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { Button } from "@mui/material";

const ResultsButton = ({ race }) => {
  const {
    setResultsSelected,
    setTopDrivers,
    setStandingsSelected,
    setQualifying,
    setSelectedRace,
    setResultsData,
    setCircuit,
    setDriverInfo,
  } = useContext(AppContext);

  // This will fetch results data from Glitch for the corresponding raceID, this will also call helper functions that
  // will sort and filter the data
  const fetchResultData = async (raceId) => {
    try {
      const response = await fetch(
        `https://w2024-assign1.glitch.me/api/results/${raceId}`
      );
      let racesData = await response.json();
      setDriverInfo(racesData);
      const topThreeDrivers = filterResultData(racesData);
      const sortTopThreeDrivers = sortResultData(topThreeDrivers);
      setTopDrivers(sortTopThreeDrivers);
      const sortedResultData = sortResultData(racesData);
      const filteredResults = filterResultFields(sortedResultData);
      setResultsData(filteredResults);
    } catch (err) {
      console.log(err);
    }
  };

  // This helper function will sort our results ascending by positionOrder
  const sortResultData = (resultData) => {
    resultData = resultData.sort((a, b) => a.positionOrder - b.positionOrder);
    return resultData;
  };

  // This will fetch Qualifying data from Glitch for the corresponding raceID, this will also call helper functions that
  // will filter the data
  const fetchQualifyingtData = async (raceId) => {
    try {
      const response = await fetch(
        `https://w2024-assign1.glitch.me/api/qualifying/${raceId}`
      );

      let qualifyingTable = await response.json();
      const newQualifyingTable = filterQualifyingtData(qualifyingTable);
      setQualifying(newQualifyingTable);
    } catch (err) {
      console.log(err);
    }
  };

  // This will fetch Circuit data from Glitch for the corresponding circuitID
  const fetchCircuitData = async (circuitId) => {
    try {
      const response = await fetch(
        `https://w2024-assign1.glitch.me/api/circuits/${circuitId}`
      );

      let circuit = await response.json();
      setCircuit(circuit[0]);
    } catch (err) {
      console.log(err);
    }
  };

  // This will handle setting alot of our states initial values and also fetching the data for the corresponding results view data
  const handleResultsButton = (currRace) => {
    setSelectedRace(currRace);
    setStandingsSelected(false);
    setResultsSelected(true);
    setQualifying();
    setQualifying();
    fetchResultData(currRace.raceId);
    fetchQualifyingtData(currRace.raceId);
    fetchCircuitData(currRace.circuitId);
  };

  // This will a helper function that will get the top three drivers based on their positionOrder
  const filterResultData = (resultData) => {
    resultData = resultData.filter((data) => data.positionOrder <= 3);
    return resultData;
  };

  // The whole point of this function is to filter the Qualifying data object for our reuseableTable so that it will
  // only include theses fields in our table. The reason we are doing this is because our reuseableTable component will
  // be able to handle all different fields and values for different data.
  const filterQualifyingtData = (qualifyingData) => {
    if (qualifyingData) {
      const filteredData = qualifyingData.map((item) => {
        const { position, drivers, constructors, q1, q2, q3 } = item;
        const filteredItem = {
          position,
          driver: `${drivers.forename} ${drivers.surname}`,
          constructor: constructors.name,
          q1,
          q2,
          q3,
          driverRef: `${drivers.driverRef}`,
          constructorRef: constructors.constructorRef,
          qualifyingTable: true,
        };
        return filteredItem;
      });

      return filteredData;
    }
  };
  // The whole point of this function is to filter the Result data object for our reuseableTable so that it will
  // only include theses fields in our table. The reason we are doing this is because our reuseableTable component will
  // be able to handle all different fields and values for different data.
  const filterResultFields = (resultData) => {
    const filteredData = resultData.map((item) => {
      const { position, drivers, constructors, laps, points, driverRef } = item;
      const filteredItem = {
        position,
        driver: `${drivers.forename} ${drivers.surname}`,
        constructor: constructors.name,
        laps,
        points,
        driverRef: `${drivers.driverRef}`,
        constructorRef: constructors.constructorRef,
        resultsTable: true,
      };
      return filteredItem;
    });

    return filteredData;
  };

  // When the Results Button is clicked it will handle three fetches to Results,Qualifying and CircuitData
  return (
    <Button
      sx={{
        color: "white",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          width: "100%",
        },
      }}
      onClick={() => handleResultsButton(race)}
    >
      <h1 className="pl-4 pr-4 text-slate-400">Results</h1>
      <AnalyticsIcon sx={{ fontSize: 40 }} />
    </Button>
  );
};

export default ResultsButton;
