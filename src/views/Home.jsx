import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context";
import FilterSection from "../home_components/FilterSection";
import RacesSection from "../home_components/RacesSection";
import HomeView from "../home_components/HomeView";

const Home = ({ supabase }) => {
  const { selectedSeason } = useContext(AppContext);

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
