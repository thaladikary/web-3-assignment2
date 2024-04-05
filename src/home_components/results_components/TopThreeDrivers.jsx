import React from "react";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../Context.jsx";
import CircularProgress from "@mui/material/CircularProgress";

const TopThreeDrivers = () => {
  const { selectedRace, setSelectedRace, topDrivers, setTopDrivers } =
    useContext(AppContext);

  const fetchResultData = async () => {
    try {
      const response = await fetch(
        `https://w2024-assign1.glitch.me/api/results/${selectedRace.raceId}`
      );
      let racesData = await response.json();
      const topThreeDrivers = filterResultData(racesData);
      setTopDrivers(topThreeDrivers);
    } catch (err) {
      console.log(err);
    }
  };

  const filterResultData = (resultData) => {
    console.log(resultData);
    resultData = resultData.filter((data) => data.positionOrder <= 3);
    return resultData;
  };

  return (
    <div className={"flex flex-row py-6"}>
      {!topDrivers ? (
        <CircularProgress className="m-8" />
      ) : (
        <div className="flex justify-evenly">
          <div className={"mx-auto gap-4 pl-40"}>
            <img
              src="https://placehold.co/100x100"
              alt="Your alt text"
              className="h-12 w-12 rounded-full mx-auto"
            />
            <p className="text-xs text-white text-center bg-opacity-80  bg-gray-800 rounded-full px-2">
              {topDrivers[1].drivers.forename}
            </p>
            <p className={"text-center text-4xl"}>2</p>
          </div>

          <div className={" gap-6"}>
            <img
              src="https://placehold.co/100x100"
              alt="Your alt text"
              className="h-20 w-20 rounded-full mx-auto"
            />
            <p className="text-xs text-white text-center bg-opacity-80  bg-gray-800 rounded-full px-2">
              {topDrivers[0].drivers.forename}
            </p>
            <p className={"text-center text-6xl"}>1</p>
          </div>

          <div className={"gap-2 pr-40"}>
            <img
              src="https://placehold.co/100x100"
              alt="Your alt text"
              className="h-12 w-12 rounded-full mx-auto"
            />
            <p className="text-xs text-white text-center bg-opacity-80  bg-gray-800 rounded-full px-2">
              {topDrivers[2].drivers.forename}
            </p>
            <p className={"text-center text-3xl"}>3</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopThreeDrivers;
