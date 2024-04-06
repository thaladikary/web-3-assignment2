import React from "react";
import { AppContext } from "../Context";
import { useContext } from "react";
import LinkIcon from "@mui/icons-material/Link";

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
    setRaces,
    circuit,
    setCircuitModalOpen,
  } = useContext(AppContext);

  const handleYearButton = () => {
    setSelectedSeason(false);
    // setResultsData();
    // setStandingsData();
    // setTopDrivers();
    // setQualifying();
  };

  return (
    <div className="border-2 flex flex-row justify-between w-full border-2 border-slate-700 p-4 w-full rounded-md">
      <div>
        {resultsSelected ? (
          <h1 className="text-start text-3xl text-slate-200">
            <button
              className="hover:underline rounded-md"
              onClick={() => handleYearButton()}
            >
              {<h1 className="text-stone-400">{`${selectedSeason}`}</h1>}
            </button>

            {!selectedRace ? {} : ` | ${selectedRace.name}`}
            {!circuit ? (
              <div></div>
            ) : (
              <div>
                <div className="text-xl">
                  <button
                    className="underline hover:text-slate-400 rounded-md"
                    onClick={() => setCircuitModalOpen(true)}
                  >
                    {circuit.name}
                  </button>

                  <p className="inline text-slate-300">
                    - {selectedRace.date}{" "}
                  </p>
                  <a
                    className="inline underline"
                    target="_blank"
                    href={`${selectedRace.url}`}
                  >
                    More Info
                  </a>
                </div>
              </div>
            )}
          </h1>
        ) : standingsSelected ? (
          <h1 className="text-start text-3xl text-slate-200">
            <button
              className="hover:underline rounded-md text-stone-400"
              onClick={() => handleYearButton()}
            >
              {<h1 className="text-stone-400">{`${selectedSeason}`}</h1>}
            </button>

            {!selectedRace ? {} : ` | ${selectedRace.name} `}
            {!circuit ? (
              <div></div>
            ) : (
              <div>
                <div className="text-xl">
                  <button
                    className="hover:underline rounded-md"
                    onClick={() => setCircuitModalOpen(true)}
                  >
                    {circuit.name}
                  </button>

                  <p className="inline text-slate-300">
                    - {selectedRace.date}{" "}
                  </p>
                  <a
                    className="inline underline"
                    target="_blank"
                    href={`${selectedRace.url}`}
                  >
                    More Info
                  </a>
                </div>
              </div>
            )}
          </h1>
        ) : (
          <h1 className="text-start text-3xl text-slate-200">
            <button
              className="hover:underline rounded-md"
              onClick={() => handleYearButton()}
            >
              <p>{selectedSeason} Races</p>
            </button>{" "}
          </h1>
        )}
      </div>
      <div className="flex flex-row space-x-4 justify-center items-center mr-4">
        <button className="h-full w-full bg-slate-100 p-4">Favorites</button>
        <button className="h-full w-full bg-slate-100 p-4">About</button>
      </div>
    </div>
  );
};

export default RaceInfoText;
