import RacesSection from "./RacesSection";
import ResultsSection from "./ResultsSection";
import { AppContext } from "../Context";
import { useContext } from "react";
import StandingsSection from "./StandingsSection";
import RaceInfoText from "./Header";
import DriverModal from "./modal_components/DriverModal";
import CircuitModal from "./modal_components/CircuitModal";
import ConstructorModal from "./modal_components/ConstructorModal";
import FavoritesModal from "./modal_components/FavoritesModal";

import AboutUsModal from "./modal_components/AboutUsModal";

const HomeView = ({ supabase }) => {
  const {
    selectedRace,
    resultsSelected,
    standingsSelected,
    setDriverData,
    setDriverModalOpen,
    setConstructorModalOpen,
    setCurrentConstructor,
  } = useContext(AppContext);

  // When the Driver is clicked in the table it will fetch the driver data and then set the  DriverModalOpen state to true to
  // display the selected driver data
  const handleDriverClick = (driver) => {
    // console.log(driver);
    fetchDriverData(driver);
    setDriverModalOpen(true);
  };

  // When the Constructor is clicked in the table it will fetch the Constructor data and then set the ConstructorModalOpen state to true to
  // display the selected Constructor data
  const handleConstructorClick = (constructor) => {
    fetchConstructorData(constructor);
    setConstructorModalOpen(true);
  };

  // This will use supabase to fetch the results for the selected raceId then filter the list to corresponding constructor selected
  // by constructorRef.
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

  // This will use supabase to fetch the results for the selected raceId then filter the list to corresponding driver selected
  // by driverRef.
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

  // The HomeView is the parent component containing many of the other components of the page.
  // The Modal components only get triggered when clicked, so our states for each modal will change.
  // Check if the resultsSelected and standingsSelected are not clicked then display a default message
  // but if one of them are clicked then it will display the content for the corresponding component.
  // ResultsSection and StandingsSection will also pass props and when corresponding component(driver or handleConstructor)
  // is clicked then it will handle fetching that data for the selected item.
  return (
    <div className="">
      <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen min-w-screen w-full p-32">
        <div className="Modal">
          <FavoritesModal />
        </div>
        <div>
          <AboutUsModal />
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
