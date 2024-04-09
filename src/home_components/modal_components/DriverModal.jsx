import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState, useEffect } from "react";
import { AppContext } from "../../Context";
import { useContext } from "react";
import { CircularProgress } from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";

const DriverModal = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const {
    driverData,
    driverModal,
    setDriverModalOpen,
    constructorModal,
    setConstructorModalOpen,
    circuitModal,
    setCircuitModalOpen,
    setDriverFavList,
    driverFavList,
  } = useContext(AppContext);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#1A1C28",
    boxShadow: 24,
    borderRadius: "6px",
    p: 4,
  };

   // This will handle when modal setting the state to close the modal 
  const handleModalClose = () => {
    setDriverModalOpen(false);
  };

  // This will handle adding the current driver in the modal to our favorites list
  const addToFavorites = (addedDriver) => {
    if (
      !driverFavList.find(
        (d) => d.drivers.driverRef === addedDriver.drivers.driverRef
      )
    ) {
      setDriverFavList([...driverFavList, addedDriver]);
    }
    handleModalClose();
  };

  // Using a Mui component called Modal when triggered will display all the imformation about the selected driver. 
  // We are using additional component called ReactCountryFlag that will display Flag for that corresponding driver
  // in our supabase we had to add the countrycode to every driver table depending on their country, this was added extra we did 
  // here is the link to that component  https://www.npmjs.com/package/react-country-flag

  return (
    <Modal
      open={driverModal}
      onClose={handleModalClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={style}>
        {!driverData ? (
          <CircularProgress className="m-8" />
        ) : (
          <div className="pdiv text-slate-100">
            <div className="flex flex-row justify-end mb-4">
              <button className="text-slate-100 " onClick={handleModalClose}>
                <CloseIcon
                  style={{ fontSize: 32 }}
                  className="hover:text-slate-500 "
                />
              </button>
            </div>
            <div className="listing-standing flex flex-nowrap justify-between items-center pb-2">
              <div className="rank font-fblack text-f1size text-5xl leading-3 text-white border-b border-solid">
                {driverData.number}
              </div>
              <div className="points text-2xl text-center">
                <div>{driverData.points}</div>

                <div className="bg-black rounded-full  text-white ml-auto py-1 px-0 text-center w-10 text-xl leading-15 tracking-wide font-normal">
                  PTS
                </div>
              </div>
            </div>

            <div className="container border-b  border-solid  border-t border-solid ">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col content-start">
                  <span className="text-xl text-slate-100">
                    {driverData.drivers.forename}
                  </span>
                  <span className=" text-slate-100 font-bold text-xl">
                    {driverData.drivers.surname}
                  </span>
                </div>
                <div className="col-xs-4 country-flag">
                  <ReactCountryFlag
                    countryCode={driverData.drivers.countrycode}
                    svg
                    style={{
                      width: "4em",
                      height: "4em",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="font-bold pt-3">
              Team Name | {driverData.constructors.name}
            </div>

            <div>
              <img
                src="https://placehold.co/100x100"
                alt="Your alt text"
                className="h-56 w-48 rounded-md mx-auto"
              />
            </div>
            <button onClick={() => addToFavorites(driverData)} className="mt-6">
              <FavoriteBorderIcon
                style={{ fontSize: 32 }}
                className="text-slate-100 hover:cursor hover:text-slate-500"
              />
            </button>
          </div>
        )}
      </Box>
    </Modal>
  );
};

export default DriverModal;
