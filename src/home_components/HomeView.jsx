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
    <div className="bg-zinc-900 p-28">
      <div className="flex flex-col items-center">
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
        <div className="flex flex-row space-x-4 h-max">
          <div className="w-content">
            <RacesSection />
          </div>

          {!resultsSelected && !standingsSelected ? (
            <div className="text-slate-400 text-4xl pr-48">
              Please select a race or view its result and standings
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
