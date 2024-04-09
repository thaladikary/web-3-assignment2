import { useContext, useState } from "react";
import Login from "./views/Login";
import Home from "./views/Home";
import { createClient } from "@supabase/supabase-js";
import { AppContext } from "./Context";

// Create supabase client that imports our supabaseurl and key 
const supabase = createClient(
  import.meta.env.VITE_SUPAURL,
  import.meta.env.VITE_SUPANONKEY
);

// using loggedIn state we check if the user is on Login page or Home page
function App() {
  const { loggedIn } = useContext(AppContext);

  return <div>{loggedIn ? <Home supabase={supabase} /> : <Login />}</div>;
}

export default App;
