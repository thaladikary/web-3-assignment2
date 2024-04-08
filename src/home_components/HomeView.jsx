import RacesSection from "./RacesSection";
import ResultsSection from "./ResultsSection";
import { AppContext } from "../Context";
import { useContext } from "react";
import StandingsSection from "./StandingsSection";
import { CircularProgress } from "@mui/material";
import RaceInfoText from "./Header";
import DriverModal from "./modal_components/DriverModal";
import CircuitModal from "./modal_components/CircuitModal";
import ConstructorModal from "./modal_components/ConstructorModal";
import FavoritesModal from "./modal_components/FavoritesModal";
import TopThreeDrivers from "./results_components/TopThreeDrivers";
import AboutUsModal from "./modal_components/AboutUsModal";
const HomeView = ({ supabase }) => {
  //results by is empty

  const {
    selectedRace,
    resultsSelected,
    standingsSelected,
    races,
    setSelectedRace,
    resultsData,
    setResultsData,
    driverData,
    setDriverData,
    circuit,
    setCircuit,
    setOpenModal,
    driverModal,
    setDriverModalOpen,
    constructorModal,
    setConstructorModalOpen,
    circuitModal,
    setCircuitModalOpen,
    setCurrentConstructor,
    driverInfo,
    currentConstructor,
    qualifyingData,
    topDrivers,
  } = useContext(AppContext);

  const handleDriverClick = (driver) => {
    // console.log(driver);
    fetchDriverData(driver);
    setDriverModalOpen(true);
  };

  const handleConstructorClick = (constructor) => {
    // Handle click on constructor here
    // console.log("Constructor clicked:", constructor);
    fetchConstructorData(constructor);
    setConstructorModalOpen(true);
  };
  const handleCircuitClick = (circuit) => {
    // Handle click on constructor here
    setCircuitModalOpen(true);
    // console.log("Circuit clicked:", circuit);
  };

  const fetchConstructorData = async (constructorRef) => {
    const { data, error } = await supabase
      .from("results")
      .select(
        `resultId, number, grid, 
            position, positionText, positionOrder, points, laps, time, milliseconds, 
            fastestLap, rank, fastestLapTime, fastestLapSpeed, statusId, 
            drivers(driverRef, code, forename, surname,countrycode),
            races(name, round, year, date),
            constructors(name, constructorRef, nationality, countrycode, *)`
      )
      .eq("raceId", selectedRace.raceId)
      .order("grid", { ascending: true });

    const selectedConstructor = data.filter(
      (d) => d.constructors.constructorRef == constructorRef
    );

    setCurrentConstructor(selectedConstructor);
  };

  const fetchDriverData = async (driverRef) => {
    const { data, error } = await supabase
      .from("results")
      .select(
        `resultId, number, grid, 
              position, positionText, positionOrder, points, laps, time, milliseconds, 
              fastestLap, rank, fastestLapTime, fastestLapSpeed, statusId, 
              drivers(driverRef, code, forename, surname,countrycode),
              races(name, round, year, date),
              constructors(name, constructorRef, nationality,countrycode)`
      )
      .eq("raceId", selectedRace.raceId)
      .order("grid", { ascending: true });

    const currentDriver = data.filter((d) => d.drivers.driverRef == driverRef);

    setDriverData(currentDriver[0]);
  };
  // bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900
  //bg-gradient-to-br from-gray-900 to-black
  return (
    <div className="">
      
      <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen w-full p-32">
        <div className="Modal">
          <FavoritesModal />
        </div>
        <div>
          <AboutUsModal/>
        </div>
        <div className="Modal">
          <DriverModal />
        </div>
        <div className="Modal">
          <ConstructorModal />
        </div>
        <div className="Modal">
          <CircuitModal />
        </div>
        <div className="w-full">
          <RaceInfoText />
        </div>
        

        <div className="flex flex-row mt-4">
          <RacesSection />

          {!resultsSelected && !standingsSelected && !resultsData && !qualifyingData && !topDrivers ? (
            <div className="text-slate-400 text-4xl pl-12">
              Please select a race or view its result and standings
            </div>
          ) : resultsSelected ? (
            <ResultsSection
              handleConstructorClick={handleConstructorClick}
              handleDriverClick={handleDriverClick}
            />
          ) : (
            <StandingsSection
              handleConstructorClick={handleConstructorClick}
              handleDriverClick={handleDriverClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeView;
