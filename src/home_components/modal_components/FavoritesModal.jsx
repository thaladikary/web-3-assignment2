import Modal from "@mui/material/Modal";
import { AppContext } from "../../Context";
import { useContext } from "react";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CloseIcon from "@mui/icons-material/Close";
import ReactCountryFlag from "react-country-flag";

const FavoritesModal = () => {
  const {
    favoritesModal,
    setFavoritesModalOpen,
    driverFavList,
    constructorFavList,
    circuitFavList,
    setDriverFavList,
    setConstructorFavList,
    setCircuitFavList,
  } = useContext(AppContext);

  const handleModalClose = () => {
    setFavoritesModalOpen(false);
  };

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

  const clearFavorites = () => {
    setDriverFavList([]);
    setConstructorFavList([]);
  };

  return (
    <Modal
      open={favoritesModal}
      onClose={handleModalClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={style}>
        {!driverFavList && !circuitFavList && !constructorFavList ? (
          <div className="text-slate-100">You have no favorites added!</div>
        ) : (
          <div className="p-4">
            <div className="flex block flex-row justify-between space-x-4 mb-8 border-b-2">
              <div className="text-slate-100 font-bold text-3xl ">
                Favorites List
              </div>
              <div className="">
                <button
                  onClick={clearFavorites}
                  className="text-slate-100 hover:text-slate-500"
                >
                  <DeleteOutlineIcon style={{ fontSize: 32 }} />
                </button>
                <button className="text-slate-100 " onClick={handleModalClose}>
                  <CloseIcon
                    style={{ fontSize: 32 }}
                    className="hover:text-slate-500 "
                  />
                </button>
              </div>
            </div>
            <div className="container w-max display flex space-x-16 text-slate-100">
              {/* Favorites for Drivers */}
              <div className="">
                <h2 className="text-xl font-bold mb-4 rounded-m">
                  Favorite Drivers
                </h2>
                <ul>
                  {driverFavList.map((driver) => (
                    <li key={driver.drivers.driverRef} className="mb-2">
                      {driver.drivers.forename} {driver.drivers.surname}{" "}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h2 className="text-xl font-semibold mb-2">
                  Favorite Constructors
                </h2>
                <ul>
                  {constructorFavList.map((c) => (
                    <li key={c.constructors.driverRef} className="mb-2">
                      {c.constructors.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h2 className="text-xl font-semibold mb-2">
                  Favorite Circuits
                </h2>
                <ul>
                  {driverFavList.map((driver) => (
                    <li key={driver.drivers.driverRef} className="mb-2">
                      {driver.drivers.forename} {driver.drivers.surname}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </Box>
    </Modal>
  );
};

export default FavoritesModal;
