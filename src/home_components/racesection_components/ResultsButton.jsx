import { useContext } from "react";
import { AppContext } from "../../Context";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { Button } from "@mui/material";

const ResultsButton = ({ race }) => {
  const {
    setResultsSelected,
    setTopDrivers,
    setStandingsSelected,

    setSelectedRace,
  } = useContext(AppContext);

  const fetchResultData = async (raceId) => {
    try {
      const response = await fetch(
        `https://w2024-assign1.glitch.me/api/results/${raceId}`
      );
      let racesData = await response.json();
      const topThreeDrivers = filterResultData(racesData);
      setTopDrivers(topThreeDrivers);
    } catch (err) {
      console.log(err);
    }
  };

  const handleResultsButton = (currRace) => {
    setSelectedRace(currRace);
    setStandingsSelected(false);
    setResultsSelected(true);
    fetchResultData(currRace.raceId);
  };

  const filterResultData = (resultData) => {
    console.log(resultData);
    resultData = resultData.filter((data) => data.positionOrder <= 3);
    return resultData;
  };

  return (
    <Button onClick={() => handleResultsButton(race)}>
      <h1 className="pl-4 pr-4">Results</h1>
      <AnalyticsIcon sx={{ fontSize: 40 }} />
    </Button>
  );
};

export default ResultsButton;
