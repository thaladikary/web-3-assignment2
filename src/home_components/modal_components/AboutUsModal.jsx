import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState, useEffect } from "react";
import { AppContext } from "../../Context";
import { useContext } from "react";

import CloseIcon from "@mui/icons-material/Close";

const AboutUsModal = () => {

    const {
        AboutUsModal,
        setAboutUsModalOpen
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

    const handleModalClose = () => {
        setAboutUsModalOpen(false);
        };   


  return (
    <Modal
      open={AboutUsModal}
      onClose={handleModalClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={style}>
         <div>AboutUsModal</div>
      </Box>  
    </Modal>

  )
}

export default AboutUsModal