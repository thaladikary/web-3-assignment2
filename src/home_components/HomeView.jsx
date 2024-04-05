import RacesSection from "./RacesSection";
import ResultsSection from "./ResultsSection";
import { AppContext } from "../Context";
import { useContext } from "react";
import StandingsSection from "./StandingsSection";
import { CircularProgress } from "@mui/material";
import RaceInfoText from "./RaceInfoText";
import DriverModal from "./modal_components/DriverModal";
import CircuitModal from "./modal_components/CircuitModal";
import ConstructorModal from "./modal_components/ConstructorModal";
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
    circuit,
  } = useContext(AppContext);

  return (
    <div className="bg-zinc-900 h-full w-full p-32">
      <div className="Modal">
        <DriverModal />
      </div>
      <div className="Modal">
        <ConstructorModal />
      </div>
      <div className="Modal">
        <CircuitModal />
      </div>
      <div className="">
        <RaceInfoText />
        <div className="flex flex-row">
          <RacesSection />

          {!resultsSelected && !standingsSelected ? (
            <div className="text-slate-400 text-4xl">
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
