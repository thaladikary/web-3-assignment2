import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AppContext } from "../../Context";
import { useContext } from "react";
import { CircularProgress } from "@mui/material";

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
            <h1 className="text-black">{currentConstructor[0].name}</h1>
          </div>
        )}
      </Box>
    </Modal>
  );
};

export default ConstructorModal;
