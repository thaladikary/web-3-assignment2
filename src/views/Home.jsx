import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context";
import FilterSection from "../home_components/FilterSection";
import RacesSection from "../home_components/RacesSection";

const Home = () => {
  const { selectedSeason, setSelectedSeason } = useContext(AppContext);

  return (
    <div>
      {selectedSeason ? <RacesSection /> : <FilterSection />}
    </div>
    
    
    )
};

export default Home;
