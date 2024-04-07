import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AppContext } from "../../Context";
import { useContext } from "react";
import { CircularProgress } from "@mui/material";
import ReactCountryFlag from "react-country-flag";

const DriverModal = () => {
  const {
    driverData,
    driverModal,
    setDriverModalOpen,
    constructorModal,
    setConstructorModalOpen,
    circuitModal,
    setCircuitModalOpen,
  } = useContext(AppContext);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  

  const handleModalClose = () => {
    setDriverModalOpen(false);
  };

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
          <div className="pdiv">
            <button onClick={handleModalClose}>CLOSE</button>
            <div className="listing-standing flex flex-nowrap justify-between items-center border-gray-500 pb-2">
              <div className="rank font-fblack text-f1size leading-3 text-black border-b border-solid">
                {driverData.number}
              </div>
              <div className="points text-center">
                <div>
                  {driverData.points}
                </div>
                
                <div className="bg-black rounded-full  text-white ml-auto py-1 px-0 text-center w-10 text-9xl leading-15 tracking-wide font-normal">
                  PTS
                </div>
              </div>
            </div>

            <div className="container border-b  border-solid border-gray-500 border-t border-solid border-gray-500">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col content-start">
                  <span className=" text-black">{driverData.drivers.forename}</span>
                  <span className=" text-black font-bold">
                    {driverData.drivers.surname}
                  </span>
                </div>
                <div className="col-xs-4 country-flag">
                  <ReactCountryFlag
                    countryCode={driverData.drivers.countrycode} //use afils database for this
                    svg
                    style={{
                      width: "2em",
                      height: "2em",
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
          </div>
        )}
      </Box>
    </Modal>
  );
};

export default DriverModal;
