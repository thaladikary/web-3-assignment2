import React from "react";
import { useContext } from "react";
import { AppContext } from "../../Context.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const TopThreeDrivers = () => {
  const { topDrivers } = useContext(AppContext);

  // This will display the top driver drivers based on the topDrivers state
  return (
    <div
      className={
        "flex flex-col w-full space-x-8 justify-center items-center rounded-md h-96"
      }
    >
      <h1 className="text-white pb-8">Top 3 Drivers</h1>
      {!topDrivers ? (
        // <CircularProgress className="m-8" />
        <div></div>
      ) : (
        <div className="flex justify-evenly">
          <div className={"mx-auto gap-4 px-40"}>
            <img
              src="https://placehold.co/100x100"
              alt="Your alt text"
              className="h-30 w-30 rounded-full mx-auto"
            />
            <div className="py-3">
              <p className="text-xs text-white text-center bg-opacity-80  bg-gray-800 rounded-full">
                {topDrivers[1].drivers.forename}
              </p>
            </div>
            <div className="flex flex-row justify-center">
              <p className={" text-white text-center text-4xl"}>2</p>
              <FontAwesomeIcon
                icon={faTrophy}
                style={{
                  color: "#ababab",
                  paddingTop: "5px",
                  paddingLeft: "5px",
                }}
              />
            </div>
          </div>

          <div className={" gap-6 px-40"}>
            <img
              src="https://placehold.co/100x100"
              alt="Your alt text"
              className="h-40 w-40 rounded-full mx-auto"
            />
            <div className="py-3">
              <p className="text-xs py text-white text-center bg-opacity-80  bg-gray-800 rounded-full ">
                {topDrivers[0].drivers.forename}
              </p>
            </div>
            <div className="flex flex-row justify-center">
              <p className={"text-white text-center text-6xl"}>1</p>
              <FontAwesomeIcon
                className="text-yellow-500 pt-4"
                icon={faTrophy}
              />
            </div>
          </div>

          <div className={"gap-2 px-40"}>
            <img
              src="https://placehold.co/100x100"
              alt="Your alt text"
              className="h-30 w-30 rounded-full mx-auto"
            />
            <div className="py-3">
              <p className="text-xs text-white text-center bg-opacity-80  bg-gray-800 rounded-full">
                {topDrivers[2].drivers.forename}
              </p>
            </div>
            <div className="flex flex-row justify-center">
              <p className={"text-white text-center text-3xl"}>3</p>
              <FontAwesomeIcon
                icon={faTrophy}
                style={{
                  color: "#813004",
                  paddingTop: "5px",
                  paddingLeft: "5px",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopThreeDrivers;
