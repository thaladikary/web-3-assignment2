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
const HomeView = ({supabase}) => {
  //results by is empty

  const {
    selectedRace,
    resultsSelected,
    standingsSelected,
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
  } = useContext(AppContext);

  const handleDriverClick = (driver) => {
    console.log(driver);
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
    try {
      const response = await fetch(
        `https://w2024-assign1.glitch.me/api/constructors/${constructorRef}`
      );

      let constructorData = await response.json();
      setCurrentConstructor(constructorData);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchDriverData = async (driverRef) => {
    
    // const {data, err} = await supabase
    //         .from("races")
    //         .select()
    //         .eq("year", season)
    

    // try {
    //   const response = await fetch(
    //     `https://w2024-assign1.glitch.me/api/drivers/${driverRef}`
    //   );

    //   let driverData = await response.json();
    //   setDriverData(driverData);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900 h-full w-full p-32">
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
        <div className="flex flex-row mt-5">
          <RacesSection />

          {!resultsSelected && !standingsSelected ? (
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
