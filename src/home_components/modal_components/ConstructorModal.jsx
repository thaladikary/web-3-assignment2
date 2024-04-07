import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AppContext } from "../../Context";
import { useContext } from "react";
import { CircularProgress } from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import { Link } from "@mui/icons-material";

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
    setConstructorModalOpen(false);
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
          <div>
            {" "}
            <button onClick={handleModalClose}>CLOSE</button>
            <div className="container border-b border-solid border-gray-500">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col content-start">
                  <span className=" text-black font-bold">
                    <span className=" text-black">
                      {currentConstructor.name}
                    </span>
                  </span>
                </div>
                <div className="col-xs-4 country-flag">
                  <ReactCountryFlag
                    countryCode={currentConstructor.nationality} //use afils database for this
                    svg
                    style={{
                      width: "2em",
                      height: "2em",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </Box>
    </Modal>
  );
};

export default ConstructorModal;
