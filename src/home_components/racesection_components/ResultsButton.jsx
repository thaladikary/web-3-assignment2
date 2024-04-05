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
  } = useContext(AppContext);

  const fetchResultData = async (raceId) => {
    console.log(raceId);
    try {
      const response = await fetch(
        `https://w2024-assign1.glitch.me/api/results/${raceId}`
      );
      let racesData = await response.json();
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

  const sortResultData = (resultData) => {
    resultData = resultData.sort((a, b) => a.positionOrder - b.positionOrder);
    return resultData;
  };

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

  const handleResultsButton = (currRace) => {
    setSelectedRace(currRace);
    setStandingsSelected(false);
    setResultsSelected(true);
    fetchResultData(currRace.raceId);
    fetchQualifyingtData(currRace.raceId);
    fetchCircuitData(currRace.circuitId);
  };

  const filterResultData = (resultData) => {
    console.log(resultData);
    resultData = resultData.filter((data) => data.positionOrder <= 3);
    return resultData;
  };

  const filterQualifyingtData = (qualifyingData) => {
    const filteredData = qualifyingData.map((item) => {
      const { position, drivers, constructors, q1, q2, q3 } = item;
      const filteredItem = {
        position,
        driver: `${drivers.forename} ${drivers.surname}`,
        constructor: constructors.name,
        q1,
        q2,
        q3,
      };
      return filteredItem;
    });

    return filteredData;
  };

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
      };
      return filteredItem;
    });

    return filteredData;
  };

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
