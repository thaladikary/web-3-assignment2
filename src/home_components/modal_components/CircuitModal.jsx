import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AppContext } from "../../Context";
import { useContext } from "react";
import { CircularProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReactCountryFlag from "react-country-flag";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CircuitModal = () => {
  const {
    driverModal,
    driverData,
    setDriverModalOpen,
    constructorModal,
    setConstructorModalOpen,
    circuitModal,
    setCircuitModalOpen,
    circuit,
    circuitFavList,
    setCircuitFavList,
  } = useContext(AppContext);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 650,
    bgcolor: "#1A1C28",
    borderRadius: "6px",
    boxShadow: 24,
    p: 4,
  };

   // This will handle when modal setting the state to close the modal 
  const handleModalClose = () => {
    setCircuitModalOpen(false);
  };

  // This will handle adding the current circuit in the modal to our favorites list
  const addToFavorites = (addedCircuit) => {
    if (!circuitFavList.find((c) => c.circuitRef === addedCircuit.circuitRef)) {
      setCircuitFavList([...circuitFavList, addedCircuit]);
    }
    handleModalClose();
  };

  // Using a Mui component called Modal when triggered will display all the imformation about the selected circuit. 
  // We are using additional component called ReactCountryFlag that will display Flag for that corresponding circuit
  // in our supabase we had to add the countrycode to every circuit table depending on their country, this was added extra we did 
  // here is the link to that component  https://www.npmjs.com/package/react-country-flag
  return (
    <Modal
      open={circuitModal}
      onClose={handleModalClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={style}>
        {!circuit ? (
          <CircularProgress className="m-8" />
        ) : (
          <div>
            <div className="border-b-2 flex justify-between">
              <h1 className="text-3xl font-bold text-slate-100">
                {circuit.name}{" "}
                <ReactCountryFlag
                  countryCode={circuit.countrycode}
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
            <div>
              <div>
                <p className="text-slate-400 mt-4">Location:</p>
                <p className="text-slate-100 ">{circuit.location}</p>
              </div>
              <div>
                <p className="text-slate-400 mt-4">Country:</p>
                <p className="text-slate-100 ">{circuit.country}</p>
              </div>
              <div>
                <p className="text-slate-400 mt-4">More info:</p>
                <p className="text-slate-100 underline">
                  <a href={circuit.url} target="#blank">
                    Wikipedia link
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <p className="text-slate-400 mt-4">Circuit GEO Location:</p>
                <MapContainer
                  className="full-height-map h-60"
                  center={[circuit.lat, circuit.lng]}
                  zoom={14}
                  scrollWheelZoom={true}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[circuit.lat, circuit.lng]}>
                    <Popup>
                      Circuit location.
                      <br />
                      {circuit.name}
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>

            <div className="mt-6">
              <button onClick={() => addToFavorites(circuit)}>
                <FavoriteBorderIcon
                  style={{ fontSize: 32 }}
                  className="text-slate-100 hover:cursor hover:text-slate-500"
                />
              </button>
            </div>
          </div>
        )}
      </Box>
    </Modal>
  );
};

export default CircuitModal;
