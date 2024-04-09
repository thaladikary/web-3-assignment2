import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AppContext } from "../../Context";
import { useContext } from "react";
import { CircularProgress } from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ConstructorModal = () => {
  const {
    constructorModal,
    setConstructorModalOpen,
    currentConstructor,
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

  // This will handle when modal setting the state to close the modal
  const handleModalClose = () => {
    setConstructorModalOpen(false);
  };

  // This will handle adding the current Constructor in the modal to our favorites list
  const addToFavorites = (addedConstructor) => {
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

  // Using a Mui component called Modal when triggered will display all the imformation about the selected constructor.
  // We are using additional component called ReactCountryFlag that will display Flag for that corresponding constructor
  // in our supabase we had to add the countrycode to every constructor table depending on their country, this was added extra we did
  // here is the link to that component  https://www.npmjs.com/package/react-country-flag
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
                    <div
                      className="flex justify-between"
                      key={c.drivers.driverRef}
                    >
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
                  <a
                    href={currentConstructor[0].constructors.url}
                    target="#blank"
                  >
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
