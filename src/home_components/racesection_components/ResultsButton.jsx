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
  } = useContext(AppContext);

  const fetchResultData = async (raceId) => {
    try {
      const response = await fetch(
        `https://w2024-assign1.glitch.me/api/results/${raceId}`
      );
      let racesData = await response.json();
      const topThreeDrivers = filterResultData(racesData);
      setTopDrivers(topThreeDrivers);
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


  const handleResultsButton = (currRace) => {
    setSelectedRace(currRace);
    setStandingsSelected(false);
    setResultsSelected(true);
    fetchResultData(currRace.raceId);
    fetchQualifyingtData(currRace.raceId);
  };

  const filterResultData = (resultData) => {
    console.log(resultData);
    resultData = resultData.filter((data) => data.positionOrder <= 3);
    return resultData;
  };

  const filterQualifyingtData = (qualifyingData) => {
    const filteredData = qualifyingData.map(item => {
      const { position, q1, q2, q3, drivers, constructors } = item;
      const filteredItem = {
        position,
        q1,
        q2,
        q3,
        driver: drivers.surname,
        constructor: constructors.name 
      };
      return filteredItem;
    });

    return filteredData

  }


  const filterResultFields = (resultData) => {
    const filteredData = resultData.map(item => {
      const { position,drivers,constructors,laps,points} = item;
      const filteredItem = {
        position,
        driver: `${drivers.forename} ${drivers.surname}`,
        constructor: constructors.name, 
        laps,
        points,

      };
      return filteredItem;
    });

    return filteredData

  }



  return (
    <Button onClick={() => handleResultsButton(race)}>
      <h1 className="pl-4 pr-4">Results</h1>
      <AnalyticsIcon sx={{ fontSize: 40 }} />
    </Button>
  );
};

export default ResultsButton;
