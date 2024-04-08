import { useContext, useState } from "react";
import Login from "./views/Login";
import Home from "./views/Home";
import { createClient } from "@supabase/supabase-js";
import { AppContext } from "./Context";
const supabase = createClient(
  import.meta.env.VITE_SUPAURL,
  import.meta.env.VITE_SUPANONKEY
);

function App() {
  const { loggedIn } = useContext(AppContext);

  return <div>{loggedIn ? <Home supabase={supabase} /> : <Login />}</div>;
}

export default App;
