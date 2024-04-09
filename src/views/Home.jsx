import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context";
import FilterSection from "../home_components/FilterSection";
import RacesSection from "../home_components/RacesSection";
import HomeView from "../home_components/HomeView";

// We are passing our supabase as a prop to our HomeView and FilterSection components 
const Home = ({ supabase }) => {
  const { selectedSeason } = useContext(AppContext);

  // If a season has been selected go to HomeView component if not then go to Filtersection 
  return (
    <div>
      {selectedSeason ? (
        <HomeView supabase={supabase} />
      ) : (
        <FilterSection supabase={supabase} />
      )}
    </div>
  );
};

export default Home;
