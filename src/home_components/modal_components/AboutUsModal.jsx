import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AppContext } from "../../Context";
import { useContext } from "react";

const AboutUsModal = () => {
  const { AboutUsModal, setAboutUsModalOpen } = useContext(AppContext);

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
    setAboutUsModalOpen(false);
  };

  // Using a Mui component called Modal when triggered will display all the imformation about this project
  // It will also have a hyperlink connected to this project github repo
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
        <div className="text-slate-100 border-b border-slate-600 text-3xl font-bold">
          About
        </div>
        <div className="text-slate-100 mt-4">
          Welcome to our F1 Database website.
        </div>
        <div className="text-slate-100 pt-4">
          Website created by: Afil Vidyasagar, Thal Adikary
        </div>
        <div className="text-slate-100 underline pt-4">
          <a
            href="https://github.com/thaladikary/web-3-assignment2"
            target="#blank"
          >
            GitHub Link
          </a>
        </div>
        <div className="text-slate-100 pt-4">
          Technologies used: Vite, React, TailwindCSS, MUI
        </div>
        <div className="text-slate-100 pt-4">Hosted using: Vercel</div>
      </Box>
    </Modal>
  );
};

export default AboutUsModal;
