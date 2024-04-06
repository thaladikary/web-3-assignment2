import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AppContext } from "../../Context";
import { useContext } from "react";
import { CircularProgress } from "@mui/material";
import ReactCountryFlag from "react-country-flag"

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

  return (
    <Modal
      open={driverModal}
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

         
          <div  className="pdiv">
             

            <div className="listing-standing">
              <div className="number flex flex-nowrap text-2xl  text-black border-b border-solid border-gray-500 pb-8">{driverData[0].number}</div>
            </div>

            <div className="container border-b border-solid border-gray-500">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col content-start">
                  <span className=" text-black">{driverData[0].forename}</span>
                  <span className=" text-black font-bold">{driverData[0].surname}</span>
                </div>
                <div className="col-xs-4 country-flag">
                  <ReactCountryFlag countryCode={driverData[0].countrycode} svg style={{
                                                                                      width: '2em',
                                                                                      height: '2em',
                                                                                  }}/>
               
                </div>
              </div>
            </div>
          </div >
        )}
      </Box>
    </Modal>
  );
};

export default DriverModal;
