import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AppContext } from "../../Context";
import { useContext } from "react";
import { CircularProgress } from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import { Link } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ConstructorModal = () => {
  const {
    driverModal,
    driverData,
    setDriverModalOpen,
    constructorModal,
    setConstructorModalOpen,
    circuitModal,
    setCircuitModalOpen,
    currentConstructor,
    setCurrentConstructor,
    setConstructorFavList,
    constructorFavList,
  } = useContext(AppContext);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "max",
    bgcolor: "#1A1C28",
    boxShadow: 24,
    borderRadius: "6px",
    p: 4,
  };
  const handleModalClose = () => {
    setConstructorModalOpen(false);
  };

  const addToFavorites = (addedConstructor) => {
    console.log(addedConstructor);
    if (
      !constructorFavList.find(
        (c) =>
          c.constructors.constructorRef ===
          addedConstructor.constructors.constructorRef
      )
    ) {
      setConstructorFavList([...constructorFavList, addedConstructor]);
    }
    handleModalClose();
  };

  return (
    <Modal
      open={constructorModal}
      onClose={handleModalClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={style}>
        {!currentConstructor ? (
          <CircularProgress className="m-8" />
        ) : (
          <div className="container w-96">
            <div className="border-b-2 flex justify-between">
              <h1 className="text-3xl font-bold text-slate-100">
                {currentConstructor[0].constructors.name}{" "}
                <ReactCountryFlag
                  countryCode={currentConstructor[0].constructors.countrycode}
                  svg
                  style={{
                    width: "2em",
                    height: "2em",
                  }}
                />
              </h1>
              <button className="text-slate-100" onClick={handleModalClose}>
                <CloseIcon
                  style={{ fontSize: 32 }}
                  className="text-slate-100 hover:cursor hover:text-slate-500"
                />
              </button>
            </div>
            <div className="text-xl mt-6">
              <div className="mt-4">
                <h1 className="text-slate-400">Drivers:</h1>
                {currentConstructor.map((c) => {
                  return (
                    <div className="flex justify-between">
                      <div className="flex text-slate-100">
                        <p className="pr-1 ">{`${c.drivers.forename}`}</p>
                        <p className="font-bold">{` ${c.drivers.surname}`}</p>
                      </div>
                      <div>
                        <ReactCountryFlag
                          countryCode={c.drivers.countrycode}
                          svg
                          style={{
                            width: "2em",
                            height: "2em",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <p className="text-slate-400 mt-4">Nationality:</p>
                <p className="text-slate-100 ">
                  {currentConstructor[0].constructors.nationality}
                </p>
              </div>
              <div>
                <p className="text-slate-400 mt-4">More info:</p>
                <p className="text-slate-100 underline">
                  <a href={currentConstructor[0].constructors.url}>
                    Wikipedia link
                  </a>
                </p>
              </div>
              <div>
                <img
                  src="https://placehold.co/100x100"
                  alt="Your alt text"
                  className="h-56 w-48 rounded-md mx-auto"
                />
              </div>
              <div className="mt-6">
                <button onClick={() => addToFavorites(currentConstructor[0])}>
                  <FavoriteBorderIcon
                    style={{ fontSize: 32 }}
                    className="text-slate-100 hover:cursor hover:text-slate-500"
                  />
                </button>
              </div>
            </div>

            {/* close button */}
          </div>
        )}
      </Box>
    </Modal>
  );
};

export default ConstructorModal;
