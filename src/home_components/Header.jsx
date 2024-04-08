import React from "react";
import { AppContext } from "../Context";
import { useContext } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
    setFavoritesModalOpen,
    driverFavList,
    setDriverFavList,
    constructorFavList,
    setConstructorFavList,
    circuitFavList,
    setCircuitFavList,
  } = useContext(AppContext);

  const handleYearButton = () => {
    setSelectedSeason(false);
    // setResultsData();
    // setStandingsData();
    // setTopDrivers();
    // setQualifying();
  };

  return (
    <div className="flex flex-row justify-between p-4 w-full border-slate-600 border-b">
      <div>
        {resultsSelected ? (
          <h1 className="text-start text-3xl text-slate-200">
            <button
              className="hover:underline rounded-md"
              onClick={() => handleYearButton()}
            >
              {
                <h1 className="text-slate-400">
                  <ArrowBackIcon sx={{ fontSize: "1em" }} />
                  {`${selectedSeason}`}
                </h1>
              }
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
      <div>
        {driverFavList.length == 0 &&
        circuitFavList.length == 0 &&
        constructorFavList.length == 0 ? (
          <div className="flex flex-row space-x-4 justify-center items-center pl-12">
            {" "}
            <button className="opacity-25 text-slate-900 text-xl bg-slate-50 border-2 p-2 rounded-md">
              Favorites
            </button>
            <button className="text-slate-100 font-bold text-xl border-2 border-slate-600 hover:bg-slate-800 p-2 border-2 border-slate-800  rounded-md">
              About
            </button>
          </div>
        ) : (
          <div className="flex flex-row space-x-4 justify-center items-center">
            <button
              className="text-slate-100 font-bold text-xl border-2 border-slate-600 hover:bg-slate-800 p-2 border-2 border-slate-800  rounded-md"
              onClick={() => setFavoritesModalOpen(true)}
            >
              Favorites
            </button>
            <button className="text-slate-100 font-bold text-xl border-2 border-slate-600 hover:bg-slate-800 p-2 border-2 border-slate-800  rounded-md">
              About
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RaceInfoText;
