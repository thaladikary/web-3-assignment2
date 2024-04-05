import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { AppContext } from '../../Context';
import { useContext } from 'react';
import { CircularProgress } from "@mui/material";

const DriverModal = () => {
  const {  modalOpen,driverData } = useContext(AppContext);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  console.log(driverData)


  return (

      <Modal open={modalOpen} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={style}>
            {!driverData? (
              <CircularProgress className="m-8" />
            ) : (<h1 className="text-black">{driverData[0].forename}</h1> )
            }
        </Box>
      </Modal>
  )
}

export default DriverModal