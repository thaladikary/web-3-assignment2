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
    setResultSelected,
    standingsSelected,
    setStandingsSelected,
  } = useContext(AppContext);

  return (
    <div className="flex flex-row items-center w-screen bg-gradient-to-b from-black to-gray-900 h-screen overflow-hidden">
      <RacesSection />
      {!resultsSelected && !standingsSelected ? (
        <p>Empty</p>
      ) : resultsSelected ? (
        <ResultsSection />
      ) : (
        <StandingsSection />
      )}
    </div>
  );
};

export default HomeView;
