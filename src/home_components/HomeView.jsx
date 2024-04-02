import RacesSection from "./RacesSection";
import ResultsSection from "./ResultsSection";
import { AppContext } from "../Context";
import { useContext } from "react";
import StandingsSection from "./StandingsSection";

const HomeView = () => {
  //results by is empty

  const {
    selectedView,
    setSelectedView,
    resultsSelected,
    setSelectedSeason,
    setResultSelected,
    standingsSelected,
    setStandingsSelected,
    selectedSeason,
    selectedRace,
    setResultsData,
    setStandingsData,
    setTopDrivers,
    setQualifying,
  } = useContext(AppContext);

  const handleYearButton = () => {
    setSelectedSeason(false);
    // setResultsData();
    // setStandingsData();
    // setTopDrivers();
    // setQualifying();
  };

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black h-full">
      <div className="flex flex-col justify-center content-center pt-16 items-center">
        {resultsSelected ? (
          <h1 className="text-start text-3xl text-slate-200">
            <button
              className="font-bold hover:underline rounded-md p-1"
              onClick={() => handleYearButton()}
            >
              {selectedSeason}
            </button>{" "}
            Race Results {!selectedRace ? {} : `| ${selectedRace.name}`}
          </h1>
        ) : standingsSelected ? (
          <h1 className="text-start text-3xl text-slate-200">
            <button
              className="font-bold hover:underline rounded-md p-1"
              onClick={() => handleYearButton()}
            >
              {selectedSeason}
            </button>{" "}
            Season Standings {!selectedRace ? {} : `| ${selectedRace.name}`}
          </h1>
        ) : (
          <h1 className="text-start text-3xl text-slate-200">
            <button
              className="font-bold hover:underline rounded-md p-1"
              onClick={() => handleYearButton()}
            >
              {selectedSeason} Races
            </button>{" "}
          </h1>
        )}
        <div className="flex flex-row mt-10 space-x-4">
          <div className="h-1/2 w-content overflow-y">
            <RacesSection />
          </div>

          {!resultsSelected && !standingsSelected ? (
            <div className="w-full h-full text-slate-400">
              Select a race to view the results or standings
            </div>
          ) : resultsSelected ? (
            <ResultsSection />
          ) : (
            <StandingsSection />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeView;
