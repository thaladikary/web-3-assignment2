import React from "react";
import { AppContext } from "../Context";
import { useContext } from "react";

const RaceInfoText = ({}) => {
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

  const handleYearButton = () => {
    setSelectedSeason(false);
    // setResultsData();
    // setStandingsData();
    // setTopDrivers();
    // setQualifying();
  };

  return (
    <div className="">
      {resultsSelected ? (
        <h1 className="text-start text-3xl text-slate-200">
          <button
            className="font-bold hover:underline rounded-md"
            onClick={() => handleYearButton()}
          >
            {<h1>{`${selectedSeason}`}</h1>}
          </button>

          {!selectedRace ? {} : ` | ${selectedRace.name} `}
          {!circuit ? (
            <div></div>
          ) : (
            <button className="font-bold hover:underline rounded-md">
              - {circuit.name}
            </button>
          )}
        </h1>
      ) : standingsSelected ? (
        <h1 className="text-start text-3xl text-slate-200">
          <button
            className="font-bold hover:underline rounded-md"
            onClick={() => handleYearButton()}
          >
            {<h1>{`${selectedSeason}`}</h1>}
          </button>

          {!selectedRace ? {} : ` | ${selectedRace.name} `}
          {!circuit ? (
            <div></div>
          ) : (
            <button className="font-bold hover:underline rounded-md">
              - {circuit.name}
            </button>
          )}
        </h1>
      ) : (
        <h1 className="text-start text-3xl text-slate-200">
          <button
            className="font-bold hover:underline rounded-md"
            onClick={() => handleYearButton()}
          >
            {selectedSeason} Races
          </button>{" "}
        </h1>
      )}
    </div>
  );
};

export default RaceInfoText;
